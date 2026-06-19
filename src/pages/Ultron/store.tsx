/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — shared store hook.
   Called once (in App) so the secondary-nav sidebar and the main detail view
   share one source of truth. DEMO ONLY — in-memory, no backend.
   ───────────────────────────────────────────────────────────────────────────── */

import { useMemo, useReducer, useState } from 'react';
import { useToast } from 'alloy-design-system';
import { ultronThreads, RESOLVE_OUTCOMES, THREAD_FOLLOWUPS, WORKING_ACTIVITIES } from './fixtures';
import type { ThreadItem, ThreadStatus } from './types';
import { SEVERITY_RANK } from './ultronShared';

// Activity labels shown one-by-one while a thread executes (Live stream).
export const EXECUTION_ACTIVITIES = ['Thinking', 'Working', 'Processing'];
// How long each activity is shown before advancing to the next. Paced slowly so
// the work reads as real and the move through Live stream is clearly visible.
export const ACTIVITY_STEP_MS = 2400;
// Extra beat on the final step before the thread flips to Resolved, so the last
// milestone (e.g. "Coverage confirmed") is readable rather than flashing past.
const END_PAD_MS = 1000;

/** How long a thread stays "in progress" (Live stream): the full activity
 *  sequence for that thread, plus a closing beat. Scales with the sequence
 *  length so richer events take longer than simple ones. */
function workingDurationMs(steps: number): number {
  return Math.max(steps, 1) * ACTIVITY_STEP_MS + END_PAD_MS;
}

type Action =
  | { type: 'decide'; threadId: string }
  | { type: 'commit'; threadId: string }
  | { type: 'reopen'; threadId: string }
  | { type: 'resolve'; threadId: string };

function reducer(state: ThreadItem[], action: Action): ThreadItem[] {
  switch (action.type) {
    case 'decide':
      // Ultron finished analyzing → it has a recommendation and now needs the
      // user's approval (analyzing → Needs attention).
      return state.map(t =>
        t.id === action.threadId ? { ...t, status: 'needs_approval' as const } : t,
      );
    case 'commit':
      // Acting on a decision moves it into execution → it shifts from the
      // "Needs attention" group into "Live stream".
      return state.map(t =>
        t.id === action.threadId ? { ...t, status: 'in_progress' as const } : t,
      );
    case 'reopen':
      // First step done, but a follow-up decision is needed → back to
      // "Needs attention" for the second call to action.
      return state.map(t =>
        t.id === action.threadId ? { ...t, status: 'needs_approval' as const } : t,
      );
    case 'resolve':
      // Execution completes → moves into "Resolved" with an outcome.
      return state.map(t =>
        t.id === action.threadId
          ? { ...t, status: 'resolved' as const, outcome: RESOLVE_OUTCOMES[t.id] ?? t.outcome }
          : t,
      );
  }
}

const GROUP_DEFS: { id: string; label: string; statuses: ThreadStatus[] }[] = [
  { id: 'needs_attention', label: 'Needs attention', statuses: ['analyzing', 'needs_approval', 'recommended'] },
  { id: 'live',            label: 'Working',          statuses: ['in_progress', 'monitoring'] },
  { id: 'resolved',        label: 'Done',            statuses: ['resolved', 'auto_resolved', 'workflow_available', 'unresolved'] },
];

export interface UltronGroup {
  id: string;
  label: string;
  threads: ThreadItem[];
}

export interface UltronStore {
  threads: ThreadItem[];
  groups: UltronGroup[];
  selectedId: string | null;
  selectedThread: ThreadItem | null;
  /** Decision stage of the selected thread (0 = first CTA, 1 = follow-up CTA). */
  selectedStage: number;
  /** Decision stage per thread id (0 = first CTA, 1 = follow-up CTA). Drives the
   *  feed, where every card tracks its own stage independently. */
  stageById: Record<string, number>;
  /** Ids the user has opened — drives the Done "Resolved" mark (green → slate). */
  viewedIds: string[];
  /** Ids whose analysis completed (analyzing → Needs approval) — keeps the
   *  "Analyzed" summary card on the page. */
  analyzedIds: string[];
  setSelectedId: (id: string) => void;
  /** DEMO ONLY — advance an analyzing case to Needs approval (reveals the prompt). */
  decide: (threadId: string) => void;
  commit: (threadId: string, label: string) => void;
  refine: (label: string) => void;
  saveWorkflow: (thread: ThreadItem) => void;
}

export function useUltronStore(): UltronStore {
  const [threads, dispatch] = useReducer(reducer, ultronThreads);
  const { toast } = useToast();

  // Default selection: the first thread that needs attention.
  const [selectedId, setSelectedIdRaw] = useState<string | null>(() => {
    const first = ultronThreads.find(
      t => t.status === 'needs_approval' || t.status === 'recommended',
    );
    return first?.id ?? ultronThreads[0]?.id ?? null;
  });

  // Cases the user has opened. Drives the Done "Resolved" mark: green (unviewed)
  // → slate (viewed). Selecting a case marks it viewed.
  const [viewedIds, setViewedIds] = useState<string[]>([]);
  const setSelectedId = (id: string) => {
    setSelectedIdRaw(id);
    setViewedIds(prev => (prev.includes(id) ? prev : [...prev, id]));
  };

  const groups = useMemo<UltronGroup[]>(() => {
    const indexed = threads.map((item, index) => ({ item, index }));
    return GROUP_DEFS.map(g => ({
      id: g.id,
      label: g.label,
      // A case lives in exactly one group — the one its current status maps to.
      // As the user acts on it, the case moves from group to group (its single
      // card travels Needs attention → Working → Done, or back for a follow-up).
      threads: indexed
        .filter(x => g.statuses.includes(x.item.status))
        // Needs-attention cases float above still-analyzing ones, then
        // severity-first, then authored recency (ascending fixture index).
        .sort((a, b) =>
          ((a.item.status === 'analyzing' ? 1 : 0) - (b.item.status === 'analyzing' ? 1 : 0)) ||
          (SEVERITY_RANK[a.item.severity] - SEVERITY_RANK[b.item.severity]) || (a.index - b.index))
        .map(x => x.item),
    }));
  }, [threads]);

  const selectedThread = threads.find(t => t.id === selectedId) ?? null;

  // Per-thread decision stage (0 = first CTA, 1 = follow-up CTA).
  const [stageById, setStageById] = useState<Record<string, number>>({});
  const selectedStage = selectedId ? (stageById[selectedId] ?? 0) : 0;

  // Cases that finished analysis (analyzing → Needs approval). Keeps the
  // "Analyzed" summary card on the page after the analysis completes.
  const [analyzedIds, setAnalyzedIds] = useState<string[]>([]);

  // DEMO ONLY — simulate Ultron finishing its analysis: flip the case to Needs
  // approval so the recommendation prompt + CTAs appear.
  const decide = (threadId: string) => {
    // Keep the view anchored on the case being acted on, so it stays in focus
    // as its status shifts (and the sidebar selection moves with it).
    setSelectedId(threadId);
    setAnalyzedIds(prev => (prev.includes(threadId) ? prev : [...prev, threadId]));
    dispatch({ type: 'decide', threadId });
    toast.info('Ultron finished analyzing', {
      description: 'A recommendation is ready for your approval.',
      size: 'lg',
    });
  };

  const commit = (threadId: string, label: string) => {
    const stage = stageById[threadId] ?? 0;
    const followUp = THREAD_FOLLOWUPS[threadId];
    const hasFollowUp = stage === 0 && !!followUp;

    // Keep the view anchored on this case as it travels Working → Done (or back
    // to Needs attention for a follow-up); the sidebar selection follows it.
    setSelectedId(threadId);

    // The activity sequence that will play during this execution (the follow-up
    // sequence when running the second step, otherwise the thread's own).
    const workSeq = stage === 1 && followUp
      ? followUp.working
      : (WORKING_ACTIVITIES[threadId] ?? EXECUTION_ACTIVITIES);
    const delay = workingDurationMs(workSeq.length);

    // Move to Live stream (executing) while the activity sequence plays.
    dispatch({ type: 'commit', threadId });

    setTimeout(() => {
      if (hasFollowUp) {
        // First step done → ask the follow-up question (back to Needs attention).
        setStageById(prev => ({ ...prev, [threadId]: 1 }));
        dispatch({ type: 'reopen', threadId });
        toast.info('Your input needed', {
          description: 'Ultron finished the first step and has a follow-up.',
          size: 'lg',
        });
      } else {
        dispatch({ type: 'resolve', threadId });
        toast.success('Resolved', { description: 'Ultron completed the work.', size: 'lg' });
      }
    }, delay);
  };
  const refine = (label: string) => {
    toast.info('Refinement coming soon', {
      description: `“${label}” opens a plan refinement surface — demo stub.`,
      size: 'lg',
    });
  };
  const saveWorkflow = (thread: ThreadItem) => {
    toast.success('Saved to workflows — demo stub', {
      description: thread.workflowOpportunity ?? undefined,
      size: 'lg',
    });
  };

  return { threads, groups, selectedId, selectedThread, selectedStage, stageById, viewedIds, analyzedIds, setSelectedId, decide, commit, refine, saveWorkflow };
}
