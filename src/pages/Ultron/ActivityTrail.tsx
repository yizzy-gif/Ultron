/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — past-activity trail.
   A vertical timeline of milestones with a connector line. Milestones that
   carry detail blocks are individually collapsible (paragraph / labeled bullet
   list / labeled check list).
   ───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CheckIcon, ChevronDownIcon } from 'alloy-design-system';
import type { ActivityMilestone } from './fixtures';
import { WORKING_ICON } from './ultronShared';

export function ActivityTrail({ milestones }: { milestones: ActivityMilestone[] }) {
  return (
    <Trail>
      {milestones.map((m, i) => (
        <MilestoneRow key={i} milestone={m} last={i === milestones.length - 1} />
      ))}
    </Trail>
  );
}

/** The same milestones, but each step is its own standalone card (no connecting
 *  line), stacked with 8px gaps. Used when the trail is lifted out of the event
 *  card and placed below it.
 *  `revealCount` shows only the first N cards (the rest grow in as they arrive);
 *  `typingIndex` types out that card's headline (the one Ultron is mid-thought
 *  on). The content is identical to the settled trail — it just grows in. */
export function ActivityTrailCards({ milestones, revealCount, typingIndex }: {
  milestones: ActivityMilestone[];
  revealCount?: number;
  typingIndex?: number;
}) {
  const shown = revealCount != null ? milestones.slice(0, Math.max(0, revealCount)) : milestones;
  return (
    <CardList>
      {shown.map((m, i) => (
        <StepCard key={i} milestone={m} typing={i === typingIndex} />
      ))}
    </CardList>
  );
}

function StepCard({ milestone, typing }: { milestone: ActivityMilestone; typing?: boolean }) {
  return (
    <StepCardShell>
      <Row>
        <IconCol><MilestoneIcon icon={milestone.icon} /></IconCol>
        <MilestoneContent milestone={milestone} last typing={typing} />
      </Row>
    </StepCardShell>
  );
}

function MilestoneRow({ milestone, last }: { milestone: ActivityMilestone; last: boolean }) {
  return (
    <Row>
      <IconCol>
        <MilestoneIcon icon={milestone.icon} />
        {!last && <Connector />}
      </IconCol>
      <MilestoneContent milestone={milestone} last={last} />
    </Row>
  );
}

function MilestoneIcon({ icon }: { icon: ActivityMilestone['icon'] }) {
  const Icon = WORKING_ICON[icon] ?? WORKING_ICON.clock;
  return <IconBadge aria-hidden="true"><Icon size={16} /></IconBadge>;
}

/** A milestone's headline + (collapsible) detail blocks. Shared by the inline
 *  trail row and the standalone step card. While `typing`, the headline types
 *  out and the detail blocks hold until it finishes — Ultron mid-thought. */
function MilestoneContent({ milestone, last, typing }: { milestone: ActivityMilestone; last?: boolean; typing?: boolean }) {
  const hasBlocks = !!milestone.blocks?.length;
  const [open, setOpen] = useState(true);
  const [headlineDone, setHeadlineDone] = useState(!typing);
  useEffect(() => { setHeadlineDone(!typing); }, [typing, milestone.headline]);

  // While typing the headline animates and the chevron toggle is inert.
  const interactive = hasBlocks && !typing;
  const showBlocks = hasBlocks && open && headlineDone;

  return (
    <Content $last={last}>
      <Header
        as={interactive ? 'button' : 'div'}
        type={interactive ? 'button' : undefined}
        $interactive={interactive}
        aria-expanded={interactive ? open : undefined}
        onClick={interactive ? () => setOpen(o => !o) : undefined}
      >
        <Headline>
          {typing ? <Typewriter text={milestone.headline} onDone={() => setHeadlineDone(true)} /> : milestone.headline}
        </Headline>
        {interactive && (
          <Chevron data-open={open || undefined} aria-hidden="true"><ChevronDownIcon size={14} /></Chevron>
        )}
      </Header>

      {showBlocks && (
        <Blocks>
          {milestone.blocks!.map((b, j) => (
            <Block key={j}>
              {b.text && <BlockText>{b.text}</BlockText>}
              {b.label && <BlockLabel>{b.label}</BlockLabel>}
              {b.bullets && (
                <BulletList>
                  {b.bullets.map((x, k) => <li key={k}>{x}</li>)}
                </BulletList>
              )}
              {b.checks && (
                <CheckList>
                  {b.checks.map((x, k) => (
                    <li key={k}><CheckIcon size={14} /><span>{x}</span></li>
                  ))}
                </CheckList>
              )}
            </Block>
          ))}
        </Blocks>
      )}
    </Content>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Trail = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`;

/* Standalone step cards — each milestone in its own card, stacked flush. */
const CardList = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`;

/* Each card slides up + fades in as it's revealed, so the trail grows. */
const cardIn = keyframes`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;

const StepCardShell = styled.div`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  animation: ${cardIn} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

/* Types a string out character-by-character with a blinking caret. */
function Typewriter({ text, onDone, speed = 24 }: { text: string; onDone?: () => void; speed?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => { setN(0); }, [text]);
  useEffect(() => {
    if (n >= text.length) return;
    const t = setTimeout(() => setN(v => v + 1), speed);
    return () => clearTimeout(t);
  }, [n, text, speed]);
  const done = n >= text.length;
  useEffect(() => { if (done) onDone?.(); }, [done]); // eslint-disable-line react-hooks/exhaustive-deps
  return <>{text.slice(0, n)}<Caret $blink={done} aria-hidden="true" /></>;
}

const caretBlink = keyframes`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`;

const Caret = styled.span<{ $blink?: boolean }>`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  vertical-align: text-bottom;
  background: currentColor;
  animation: ${p => (p.$blink ? caretBlink : 'none')} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

const Row = styled.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`;

const IconCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-4);
`;

const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-secondary);
`;

/* Dashed vertical line connecting one milestone's icon to the next. Multiply
   blend lets the light slate dashes darken against the card's tonal background
   instead of sitting on top as a flat gray. */
const Connector = styled.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`;

const Content = styled.div<{ $last?: boolean }>`
  flex: 1;
  min-width: 0;
  padding-bottom: ${p => (p.$last ? '0' : 'var(--space-4)')};
`;

const Header = styled.div<{ $interactive?: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${p => (p.$interactive ? 'pointer' : 'default')};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;

const Headline = styled.span`
  font-size: var(--text-sm); /* 14px */
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  line-height: var(--line-height-snug);
`;

const Chevron = styled.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(180deg); }
`;

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;

const BlockText = styled.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-secondary);
`;

const BlockLabel = styled.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`;

const BulletList = styled.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`;

const CheckList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  & li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
  & li svg {
    flex-shrink: 0;
    color: var(--color-success-content);
  }
`;
