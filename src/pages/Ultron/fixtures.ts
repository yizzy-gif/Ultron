/* ─────────────────────────────────────────────────────────────────────────────
   Ultron demo fixtures
   Sourced from the activity-feed seed data (20 simulated events). Each event
   carries a trigger, Ultron's silent investigation (the "Analyzing event"
   steps), the recommended plan ("What I'd do"), the one-tap question ("Ask:"),
   and an outcome state.

   The seed data's own state field (action · wait · none) describes whether
   Ultron can act, needs a person, or has nothing to do. For a realistic demo
   the cases are spread across the three lifecycle groups instead — New (needs
   attention), Working, and Done — so every component path is exercised:
     · New  → analyzing / needs_approval / recommended
     · Working → in_progress / monitoring
     · Done → resolved / auto_resolved / workflow_available / unresolved
   The "no action needed" (none) events land in Done as clean auto-resolutions.

   Notes:
   · `status` drives deck membership / row treatment; it is the only field that
     diverges from the seed data's own state, by design (see above).
   · A resolved case with a non-null `workflowOpportunity` renders purple
     (save-as-workflow). `workflow_available` always renders purple.
   · Array order is authored most-recent-first; recency sorting relies on it.
   ───────────────────────────────────────────────────────────────────────────── */

import type { ThreadItem, ThreadSeverity } from './types';

export const ultronThreads: ThreadItem[] = [
  // ── New · Needs attention (needs_approval) ─────────────────────────────────
  {
    id: 'shift_drop_maria',
    name: 'Shift Drop Recovery',
    title: 'Maria Ellis dropped her 2pm shift at Riverside Clinic',
    capability: 'Coverage Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'Maria dropped her 2:00 PM RN shift at Riverside Clinic.',
    assessment: 'Urgent fill — the shift starts in under 12 hours and still has no replacement.',
    analysisResult: '8 available RNs match, with no overtime or do-not-return conflicts.',
    recommendation: 'Find a qualified replacement and fill it.',
    outcome: null,
    workflowOpportunity: 'Automate urgent shift-drop recovery.',
    timeline: [
      { state: 'detected', headline: 'RN dropped this afternoon’s shift', done: true },
      { state: 'assessment', headline: 'Starts in under 12 hours — urgent fill', done: true },
      { state: 'recommendation', headline: '8 qualified RNs identified', done: true },
      { state: 'approval', headline: 'Approval required before outreach', done: false },
    ],
    actions: ['Message replacements', 'Assign first yes', 'Notify scheduler'],
    timestamp: '8:02 AM',
  },
  {
    id: 'timeoff_sofia',
    name: 'Time-Off Coverage Check',
    title: 'Sofia Marin requested time off next Thursday–Friday',
    capability: 'Time Off',
    status: 'needs_approval',
    severity: 'medium',
    event: 'Sofia requested time off next Thursday and Friday.',
    assessment: 'Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.',
    analysisResult: 'PTO balance covers it; only one backup is available for Friday.',
    recommendation: 'Approve Thursday and hold Friday for your call.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Time-off request for Thu–Fri', done: true },
      { state: 'assessment', headline: 'Friday coverage is thin', done: true },
      { state: 'recommendation', headline: 'Approve Thursday, hold Friday', done: true },
      { state: 'approval', headline: 'Approval required for the split decision', done: false },
    ],
    actions: ['Approve Thursday', 'Hold Friday for you'],
    timestamp: '10:12 AM',
  },
  {
    id: 'document_kenji',
    name: 'Document Filing',
    title: 'Kenji Tanaka uploaded a document to his profile',
    capability: 'Compliance',
    status: 'needs_approval',
    severity: 'low',
    event: 'Kenji uploaded a document to his profile.',
    assessment: 'Read as a valid CPR certification that expires in 3 weeks.',
    analysisResult: 'Name matches the uploader; the credential is valid but expires soon.',
    recommendation: 'File it as a CPR cert and flag the renewal.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'New document on Kenji’s profile', done: true },
      { state: 'assessment', headline: 'Valid CPR cert, expires in 3 weeks', done: true },
      { state: 'recommendation', headline: 'File the cert + flag the renewal', done: true },
      { state: 'approval', headline: 'Approval required before filing', done: false },
    ],
    actions: ['File as CPR cert', 'Mark verified', 'Flag renewal'],
    timestamp: '11:48 AM',
  },

  // ── New · Needs attention (recommended) ────────────────────────────────────
  {
    id: 'application_priya',
    name: 'New Lead Screening',
    title: 'New application: Priya R. — status New Lead',
    capability: 'Recruiting',
    status: 'recommended',
    severity: 'low',
    event: 'Priya R. submitted an application — status New Lead.',
    assessment: 'Strong match for the linked CNA Night Shift role downtown.',
    analysisResult: 'CNA license valid, availability matches — scored a 92% match.',
    recommendation: 'Screen the lead and reach out if qualified.',
    outcome: null,
    workflowOpportunity: 'Auto-screen and advance qualified leads.',
    timeline: [
      { state: 'detected', headline: 'New application received', done: true },
      { state: 'assessment', headline: '92% match for CNA · Night · Downtown', done: true },
      { state: 'recommendation', headline: 'Screen and reach out', done: false },
    ],
    actions: ['Mark qualified', 'Send intro', 'Ask screening questions'],
    timestamp: '8:41 AM',
  },
  {
    id: 'new_shift_forklift',
    name: 'Shift Offer',
    title: 'New shift created: Forklift Op, Friday 6am, Bay 4',
    capability: 'Fill Optimization',
    status: 'recommended',
    severity: 'low',
    event: 'A Forklift Op shift was created for Friday 6:00 AM, Bay 4.',
    assessment: 'Certified-only shift with a healthy pool of available workers.',
    analysisResult: '11 certified, available workers — top 6 ranked by proximity and reliability.',
    recommendation: 'Offer it to the best-matched workers.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'New forklift shift created', done: true },
      { state: 'assessment', headline: '11 certified workers available', done: true },
      { state: 'recommendation', headline: 'Offer to the top 6 matches', done: false },
    ],
    actions: ['Offer to top matches', 'Assign first claim', 'Confirm and update calendar'],
    timestamp: '9:30 AM',
  },
  {
    id: 'new_user_luis',
    name: 'Candidate Onboarding',
    title: 'New user created — Candidate: Luis M.',
    capability: 'Onboarding',
    status: 'recommended',
    severity: 'low',
    event: 'A new Candidate record was created for Luis M.',
    assessment: 'No tasks yet — ready for the standard intake set.',
    analysisResult: 'Pulled the 5 standard intake tasks; nothing pre-fillable on file.',
    recommendation: 'Kick off onboarding.',
    outcome: null,
    workflowOpportunity: 'Auto-start onboarding for new candidates.',
    timeline: [
      { state: 'detected', headline: 'New candidate record created', done: true },
      { state: 'assessment', headline: '5 standard intake tasks ready', done: true },
      { state: 'recommendation', headline: 'Send welcome + assign intake', done: false },
    ],
    actions: ['Send welcome', 'Assign intake tasks', 'Follow up to completion'],
    timestamp: '1:40 PM',
  },

  // ── New · Needs attention (needs_approval) ─────────────────────────────────
  {
    id: 'missed_clockin_james',
    name: 'Missed Clock-In',
    title: 'James Okoro never started his 9am shift',
    capability: 'Attendance Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'James never clocked in for his 9:00 AM shift.',
    assessment: 'The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.',
    analysisResult: 'No time-off on file and the 5-minute grace elapsed — an unexplained gap.',
    recommendation: 'Check if he’s on the way and update the shift.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: '9am start passed with no clock-in', done: true },
      { state: 'assessment', headline: 'No release on file — grace window elapsed', done: true },
      { state: 'recommendation', headline: 'Check in with James and update the shift', done: true },
      { state: 'approval', headline: 'Approval required before outreach', done: false },
    ],
    actions: ['Text James', 'Update shift', 'Flag scheduling inbox'],
    timestamp: '9:03 AM',
  },
  {
    id: 'thread_cancel_wed',
    name: 'Informal Cancellation',
    title: 'Worker replied “I can’t make tomorrow” in a thread',
    capability: 'Coverage Recovery',
    status: 'needs_approval',
    severity: 'high',
    event: 'A worker replied “I can’t make tomorrow” in an Engage thread.',
    assessment: 'Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.',
    analysisResult: 'An informal cancellation with no release on file — it needs to be recorded as a drop.',
    recommendation: 'Treat it as a drop and start a fill, with a heads-up.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Inbound message reads as a cancellation', done: true },
      { state: 'assessment', headline: 'Matched to the assigned Wed shift', done: true },
      { state: 'recommendation', headline: 'Log the release and start a fill', done: true },
      { state: 'approval', headline: 'Approval required before recording it', done: false },
    ],
    actions: ['Log the release', 'Acknowledge reply', 'Start replacement search'],
    timestamp: '4:30 PM',
  },

  // ── New · Needs attention (needs_approval — moved from Working) ─────────────
  {
    id: 'job_event_staff',
    name: 'Bulk Fill',
    title: 'New job: Event Staff — 20 openings, Saturday',
    capability: 'Marketplace Optimization',
    status: 'needs_approval',
    severity: 'medium',
    event: 'An Event Staff job was created with 20 openings for Saturday 4:00 PM.',
    assessment: '63 eligible workers ranked; 9 double-booked candidates filtered out.',
    analysisResult: '63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.',
    recommendation: 'Match the pool and invite the best candidates.',
    outcome: null,
    workflowOpportunity: 'Automate bulk-fill invitations.',
    timeline: [
      { state: 'detected', headline: 'New job · 20 openings · Saturday', done: true },
      { state: 'assessment', headline: '63 eligible workers ranked', done: true },
      { state: 'recommendation', headline: 'Invite the top matches to claim slots', done: true },
      { state: 'approval', headline: 'Approval required before inviting', done: false },
    ],
    actions: ['Invite top matches', 'Track responses', 'Keep a standby list'],
    timestamp: '1:05 PM',
  },
  {
    id: 'missed_clockout_bianca',
    name: 'Open Timesheet',
    title: 'Bianca Rossi missed her clock-out — no end time on the timesheet',
    capability: 'Payroll Operations',
    status: 'needs_approval',
    severity: 'medium',
    event: 'Bianca’s shift ended with no clock-out — her timesheet is open.',
    assessment: 'Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.',
    analysisResult: 'Held from payroll — the open punch needs a confirmed end time before the run.',
    recommendation: 'Confirm her real end time and fix the timesheet.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Shift ended with no clock-out', done: true },
      { state: 'assessment', headline: 'Held from payroll — needs a real end time', done: true },
      { state: 'recommendation', headline: 'Confirm her end time and fix the timesheet', done: true },
      { state: 'approval', headline: 'Approval required before payroll', done: false },
    ],
    actions: ['Text Bianca', 'Update timesheet', 'Flag payroll'],
    timestamp: '3:10 PM',
  },

  // ── New · Needs attention (recommended — moved from Working) ────────────────
  {
    id: 'payroll_acme_invoice',
    name: 'Invoice Roll-Up',
    title: 'Shift marked payroll approved — Acme Logistics',
    capability: 'Payroll Operations',
    status: 'recommended',
    severity: 'low',
    event: 'A shift was marked payroll approved for Acme Logistics.',
    assessment: 'Bill rate read and matched to Acme’s open, net-30 draft invoice.',
    analysisResult: 'No duplicate line exists — the approved shift is safe to add to the open invoice.',
    recommendation: 'Roll it onto the client’s open invoice.',
    outcome: null,
    workflowOpportunity: 'Automate approved-shift invoicing.',
    timeline: [
      { state: 'detected', headline: 'Shift marked payroll approved', done: true },
      { state: 'assessment', headline: 'Matched to Acme’s open invoice', done: true },
      { state: 'recommendation', headline: 'Roll it onto the open invoice', done: false },
    ],
    actions: ['Add line item', 'Recalculate total'],
    timestamp: '11:00 AM',
  },
  {
    id: 'schedule_published',
    name: 'Schedule Confirmation',
    title: 'It’s Friday — next week’s schedule is published',
    capability: 'Scheduling',
    status: 'recommended',
    severity: 'medium',
    event: 'Next week’s schedule was published — 84 shifts across 31 workers.',
    assessment: '22 shifts are still unconfirmed, heaviest on Monday and Tuesday.',
    analysisResult: '22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.',
    recommendation: 'Confirm everyone before the weekend.',
    outcome: null,
    workflowOpportunity: 'Automate weekly schedule confirmations.',
    timeline: [
      { state: 'detected', headline: 'Next week’s schedule published', done: true },
      { state: 'assessment', headline: '22 shifts unconfirmed', done: true },
      { state: 'recommendation', headline: 'Confirm everyone before the weekend', done: false },
    ],
    actions: ['Confirm all shifts', 'Chase the unconfirmed', 'Send Monday-readiness summary'],
    timestamp: '8:00 AM',
  },

  // ── Done (resolved) ────────────────────────────────────────────────────────
  {
    id: 'shift_release_jenny',
    name: 'Shift Release Recovery',
    title: 'Jenny Park released her Saturday shift at Lakeside',
    capability: 'Coverage Recovery',
    status: 'resolved',
    severity: 'medium',
    event: 'Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.',
    assessment: 'More than 12 hours out — standard fill path with 5 qualified caregivers.',
    recommendation: 'Find a qualified replacement and fill it.',
    outcome: 'Replacement assigned — coverage restored and the schedule updated.',
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Saturday caregiver shift released', done: true },
      { state: 'assessment', headline: '5 qualified caregivers available', done: true },
      { state: 'recommendation', headline: 'Messaged the best matches', done: true },
      { state: 'resolution', headline: 'First qualified yes assigned', done: true },
    ],
    actions: ['Assign Replacement'],
    timestamp: '2:22 PM',
  },
  {
    id: 'birthday_tomas',
    name: 'Birthday Greeting',
    title: 'Tomas Greco has a birthday today',
    capability: 'Engagement',
    status: 'resolved',
    severity: 'none',
    event: 'Today is Tomas’s birthday.',
    assessment: 'Active employee; preferred channel is in-app chat — a send is appropriate.',
    recommendation: 'Send a happy birthday from the team.',
    outcome: 'A warm birthday note was sent to Tomas from the team.',
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Birthday matched to today', done: true },
      { state: 'assessment', headline: 'Active employee · in-app chat', done: true },
      { state: 'resolution', headline: 'Birthday note sent', done: true },
    ],
    actions: ['Send Birthday Note'],
    timestamp: '9:12 AM',
  },
  {
    id: 'weekly_fill_report',
    name: 'Scheduled Report',
    title: 'Weekly fill-rate report generated on schedule',
    capability: 'Reporting',
    status: 'resolved',
    severity: 'none',
    event: 'The weekly fill-rate report ran on its configured schedule.',
    assessment: 'A scheduled report ran as configured — already on the Home dashboard.',
    recommendation: 'No action needed.',
    outcome: 'Report posted to the Home dashboard — no intervention required.',
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Weekly report generated', done: true },
      { state: 'resolution', headline: 'Posted to the Home dashboard', done: true },
    ],
    actions: [],
    timestamp: '5:00 PM',
  },

  // ── Done (auto-resolved — no action needed) ────────────────────────────────
  {
    id: 'clockin_devon',
    name: 'Clean Clock-In',
    title: 'Devon Pierce clocked in at Eastgate Warehouse',
    capability: 'Attendance',
    status: 'auto_resolved',
    severity: 'none',
    event: 'Devon clocked in at Eastgate Warehouse.',
    assessment: 'Clean clock-in inside the geofence with all required fields filled.',
    recommendation: 'No action needed.',
    outcome: 'Clean clock-in inside the geofence — logged, nothing to do.',
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Clock-in at Eastgate Warehouse', done: true },
      { state: 'assessment', headline: 'Inside geofence · all fields present', done: true },
      { state: 'resolution', headline: 'Logged — no action needed', done: true },
    ],
    actions: [],
    timestamp: '8:15 AM',
  },
  {
    id: 'phone_aisha',
    name: 'Profile Update',
    title: 'Aisha Bello updated her phone number',
    capability: 'Users',
    status: 'auto_resolved',
    severity: 'none',
    event: 'Aisha updated her phone number.',
    assessment: 'A routine edit on an editable field with no downstream dependency.',
    recommendation: 'No action needed.',
    outcome: 'Routine profile edit — no workflow depends on it, nothing to do.',
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Phone number updated', done: true },
      { state: 'resolution', headline: 'No downstream impact — logged', done: true },
    ],
    actions: [],
    timestamp: '12:30 PM',
  },
  {
    id: 'fill_confirmed_maria',
    name: 'Autonomous Fill Closed',
    title: 'Fill agent confirmed a replacement for Maria’s shift',
    capability: 'Autonomous Operations',
    status: 'auto_resolved',
    severity: 'high',
    event: 'The fill agent confirmed a replacement for Maria’s earlier shift.',
    assessment: 'An earlier fill closing out successfully — covered and scheduler notified.',
    recommendation: 'No action needed.',
    outcome: 'Shift covered and the scheduler notified — logged automatically.',
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Replacement confirmed for Maria’s shift', done: true },
      { state: 'execution', headline: 'Coverage secured by the fill agent', done: true },
      { state: 'resolution', headline: 'Scheduler notified — logged', done: true },
    ],
    actions: [],
    timestamp: '3:55 PM',
  },
  {
    id: 'invoice_paid_4821',
    name: 'Invoice Paid',
    title: 'Client marked invoice #4821 as paid',
    capability: 'Invoicing',
    status: 'auto_resolved',
    severity: 'none',
    event: 'A client marked invoice #4821 as paid.',
    assessment: 'Payment was recorded outside Teambridge; the status already reflects reality.',
    recommendation: 'No action needed.',
    outcome: 'Invoice #4821 marked paid — record matches reality, nothing to act on.',
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: 'Invoice #4821 marked paid', done: true },
      { state: 'resolution', headline: 'Status already accurate — logged', done: true },
    ],
    actions: [],
    timestamp: '11:25 AM',
  },

  // ── Done (workflow-ready — recurring pattern) ──────────────────────────────
  {
    id: 'cred_expired_nadia',
    name: 'Credential Lapse',
    title: 'Nadia Haddad’s CPR cert expired overnight',
    capability: 'Compliance',
    status: 'workflow_available',
    severity: 'none',
    event: 'Nadia’s CPR certification expired overnight.',
    assessment: 'A blocking policy flagged the lapse — CPR is required for her role.',
    recommendation: 'Pull her from non-compliant shifts and start renewal.',
    outcome: 'Renewal task assigned and backfills lined up for the 3 affected shifts.',
    workflowOpportunity: 'Monitor credential lapses and auto-start renewals.',
    timeline: [
      { state: 'detected', headline: 'CPR cert expired overnight', done: true },
      { state: 'assessment', headline: '3 upcoming shifts now at risk', done: true },
      { state: 'recommendation', headline: 'Renewal task + backfills lined up', done: true },
      { state: 'workflow', headline: 'Recurring pattern ready to save as a workflow', done: true },
    ],
    actions: ['Start renewal', 'Line up backfills'],
    timestamp: '10:40 AM',
  },
];

/** Person each case is about — drives the deck card's profile avatar (with an
 *  initials fallback when the photo can't load). Only set where the case title
 *  already leads with that person's full name, so `threadDisplayTitle` leaves
 *  the title untouched. Event-type cases (a new application, an invoice, a
 *  published schedule) intentionally have no subject and display verbatim. */
export const THREAD_SUBJECTS: Record<string, string> = {
  shift_drop_maria: 'Maria Ellis',
  timeoff_sofia: 'Sofia Marin',
  document_kenji: 'Kenji Tanaka',
  missed_clockin_james: 'James Okoro',
  missed_clockout_bianca: 'Bianca Rossi',
  shift_release_jenny: 'Jenny Park',
  birthday_tomas: 'Tomas Greco',
  clockin_devon: 'Devon Pierce',
  phone_aisha: 'Aisha Bello',
  cred_expired_nadia: 'Nadia Haddad',
};

/** Glanceable case metadata for the collapsed card subtitle: a scannable
 *  Role · Shift time · Location line in place of the prose assessment. DEMO ONLY. */
export const THREAD_META: Record<string, { role: string; shiftTime: string; location: string }> = {
  shift_drop_maria:      { role: 'RN',          shiftTime: 'Today · 2:00 PM',     location: 'Riverside Clinic' },
  timeoff_sofia:         { role: 'PTO',         shiftTime: 'Next Thu–Fri',        location: '2 assigned shifts' },
  document_kenji:        { role: 'CPR cert',    shiftTime: 'Expires in 3 weeks',  location: 'Profile upload' },
  application_priya:     { role: 'CNA',         shiftTime: 'Night Shift',         location: 'Downtown' },
  new_shift_forklift:    { role: 'Forklift Op', shiftTime: 'Fri · 6:00 AM',       location: 'Bay 4' },
  new_user_luis:         { role: 'Candidate',   shiftTime: 'Onboarding',          location: '5 intake tasks' },
  missed_clockin_james:  { role: 'Worker',      shiftTime: 'Today · 9:00 AM',     location: 'No clock-in' },
  thread_cancel_wed:     { role: 'Worker',      shiftTime: 'Wed · 7:00 AM',       location: 'Pier 9' },
  payroll_acme_invoice:  { role: 'Invoice',     shiftTime: '$48/hr · 8 hrs',      location: 'Acme Logistics' },
  job_event_staff:       { role: 'Event Staff', shiftTime: 'Sat · 4:00 PM',       location: '20 openings' },
  missed_clockout_bianca:{ role: 'Timesheet',   shiftTime: 'Ended ~6:05 PM',      location: 'Open punch' },
  schedule_published:    { role: '31 workers',  shiftTime: 'Next week',           location: '84 shifts' },
  shift_release_jenny:   { role: 'Caregiver',   shiftTime: 'Sat · 8:00 AM',       location: 'Lakeside' },
  birthday_tomas:        { role: 'Employee',    shiftTime: 'Today',               location: 'In-app chat' },
  weekly_fill_report:    { role: 'Report',      shiftTime: 'Weekly',              location: 'Home dashboard' },
  clockin_devon:         { role: 'Clock-in',    shiftTime: 'Today · 8:15 AM',     location: 'Eastgate Warehouse' },
  phone_aisha:           { role: 'Profile',     shiftTime: 'Today',               location: 'Phone updated' },
  fill_confirmed_maria:  { role: 'RN',          shiftTime: 'Replacement',         location: 'Riverside Clinic' },
  invoice_paid_4821:     { role: 'Invoice',     shiftTime: '#4821',               location: 'Marked paid' },
  cred_expired_nadia:    { role: 'CPR cert',    shiftTime: 'Expired',             location: '3 shifts at risk' },
};

/** The glanceable metadata line for a case, e.g. "RN · Today · 2:00 PM ·
 *  Riverside Clinic". Empty string when the case has no metadata. */
export function threadMeta(id: string): string {
  const m = THREAD_META[id];
  return m ? [m.role, m.shiftTime, m.location].filter(Boolean).join(' · ') : '';
}

/** Card title prefixed with the subject's name, e.g. "Marcus Lee projected
 *  overtime exceeds budget this week". Titles that already lead with the name
 *  are left untouched; a leading acronym (RN, CNA) keeps its casing. */
export function threadDisplayTitle(thread: ThreadItem): string {
  const name = THREAD_SUBJECTS[thread.id];
  if (!name || thread.title.startsWith(name)) return thread.title;
  const firstWord = thread.title.split(' ')[0] ?? '';
  const keepCase = firstWord === firstWord.toUpperCase(); // acronym like "RN" / "CNA"
  const rest = keepCase ? thread.title : thread.title.charAt(0).toLowerCase() + thread.title.slice(1);
  return `${name} ${rest}`;
}

/** Demo placeholder profile photo, stable per case (seeded by thread id). */
export const threadAvatarUrl = (id: string): string =>
  `https://i.pravatar.cc/80?u=${id}`;

/** A single "thinking" step Ultron emits while analyzing a fresh event — a
 *  short headline plus a line of sub-context explaining what it found, so the
 *  stream reads like the activity trail (headline + detail) rather than a bare
 *  checklist. */
export interface AnalyzingStep {
  /** Leading icon when the step is folded into the accumulated activity trail. */
  icon: WorkingIcon;
  headline: string;
  detail: string;
}

/** Short "thinking" steps Ultron emits while analyzing a fresh event. They
 *  reveal one at a time (accumulating, growing the analyzing card) before the
 *  case flips to Needs approval. Falls back to a generic sequence. Sourced from
 *  each event's "Analyzing event" checklist in the seed data. */
export const ANALYZING_ACTIVITIES: Record<string, AnalyzingStep[]> = {
  shift_drop_maria: [
    { icon: 'clock', headline: 'Reviewed dropped shift', detail: 'I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'The start time is in 4 hours, so this is an urgent fill — it might be too late to find a replacement, and more urgency or incentive may be needed to staff it now. First I’ll evaluate whether there are suitable replacements. I could reach out in ranked order, but as this is urgent let me contact the top 20 best replacements all at once. This has worked in the past, so I won’t suggest a bonus incentive at this time.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  timeoff_sofia: [
    { icon: 'clock', headline: 'Reviewed time-off request', detail: 'I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'Her PTO balance covers the request and there’s no blackout rule, so this is approvable. Running coverage on both shifts: Thursday stays fully covered, but Friday only has a single backup and reads thin. Rather than risk an uncovered shift, I’ll recommend approving Thursday outright and holding Friday for your call.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  document_kenji: [
    { icon: 'clock', headline: 'Reviewed uploaded document', detail: 'I opened the file on Kenji’s profile and read it as a valid CPR certification.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'The name matches the uploader and the credential checks out, but it expires in 3 weeks. The right move is to file it as a CPR cert so the record is accurate, then set a renewal flag ahead of the expiry so it doesn’t lapse and block his shifts.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  application_priya: [
    { icon: 'clock', headline: 'Reviewed new application', detail: 'I read Priya’s application against the linked role: CNA · Night Shift · Downtown.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'Her CNA license is valid and her availability matches the shift, scoring a 92% match — a strong lead. Rather than let it sit in the queue, I’ll screen it as qualified and reach out with an intro so we move on a good candidate before someone else does.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  new_shift_forklift: [
    { icon: 'clock', headline: 'Reviewed new shift', detail: 'I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'Matching the pool turned up 11 certified, available workers — a healthy field with no coverage risk. Since there’s plenty of supply I don’t need to widen the net; I’ll offer it to the top 6 ranked by proximity and reliability and let the first claim take it.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  new_user_luis: [
    { icon: 'clock', headline: 'Reviewed new candidate', detail: 'I read the new Candidate record for Luis M. — no tasks on it yet.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'Nothing is pre-fillable on file and this is a standard new-candidate setup, so the straightforward path is to kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  missed_clockin_james: [
    { icon: 'clock', headline: 'Reviewed missed clock-in', detail: 'I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'There’s no time-off or release on file, so this is an unexplained gap rather than a planned absence — but it’s early enough that he may simply be running late. Before treating it as a no-show I’ll text him to check if he’s on the way, update the shift with what I learn, and flag the scheduling inbox if he doesn’t respond.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  thread_cancel_wed: [
    { icon: 'clock', headline: 'Reviewed inbound message', detail: 'I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'It’s an informal cancellation with no formal release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log it as a release, acknowledge her reply, and start a replacement search right away since the shift is tomorrow.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  payroll_acme_invoice: [
    { icon: 'clock', headline: 'Reviewed approved shift', detail: 'I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'There’s no duplicate line for it yet, so it’s safe to add. Rather than open a new invoice, the clean move is to roll the approved shift onto Acme’s existing open invoice and recalculate the total so billing stays consolidated.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  job_event_staff: [
    { icon: 'clock', headline: 'Reviewed new job', detail: 'I read the job: Event Staff · 20 openings · Saturday 4:00 PM.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'Matching the pool ranked 63 eligible workers and filtered out 9 double-booked against Saturday shifts. With 20 slots to fill and good supply, the efficient path is to invite the top matches to claim slots first-come, track responses, and keep a standby list rather than hand-assigning each opening.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  missed_clockout_bianca: [
    { icon: 'clock', headline: 'Reviewed open timesheet', detail: 'I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'An open punch can’t go through payroll as-is, so I’ve held it from the run. The ping gives a likely end time, but I’d rather confirm it with her than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  schedule_published: [
    { icon: 'clock', headline: 'Reviewed published schedule', detail: 'I scanned next week’s schedule: 84 shifts across 31 workers.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: '22 shifts are still unconfirmed, heaviest on Monday and Tuesday — that’s where the start-of-week risk sits. Confirming now, before the weekend, gives workers time to flag conflicts, so I’ll send confirmations to everyone, chase the unconfirmed, and prepare a Monday-readiness summary.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  shift_release_jenny: [
    { icon: 'clock', headline: 'Reviewed released shift', detail: 'I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'It’s more than 12 hours out, so this is a standard fill with no coverage risk. Matching the pool surfaced 5 qualified caregivers, so I’ll reach out to the best matches in ranked order and assign the first qualified yes.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  birthday_tomas: [
    { icon: 'clock', headline: 'Reviewed birthday', detail: 'I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'He’s active and reachable on in-app chat, so a quick, warm send is appropriate. I’ll send a happy-birthday note from the team.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  cred_expired_nadia: [
    { icon: 'clock', headline: 'Reviewed credential lapse', detail: 'A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'Three CPR-gated shifts in the next week are now at risk, but replacements are available for all three. The right move is to pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies.' },
    { icon: 'done', headline: 'Plan created and shared', detail: '' },
  ],
  // ── "No action needed" events — the thinking Ultron ran to conclude there was
  // nothing to do (so their trail reads as deliberate, not empty). ──────────────
  clockin_devon: [
    { icon: 'clock', headline: 'Reviewed clock-in', detail: 'Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'It’s a clean clock-in inside the geofence with every required field present, so there’s nothing to fix — the system is working as intended and I’ll just log it.' },
  ],
  phone_aisha: [
    { icon: 'clock', headline: 'Reviewed profile update', detail: 'Aisha updated her phone number — a routine edit on an editable field.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'No policy or workflow depends on this field, so there’s no downstream impact and nothing to do beyond logging it.' },
  ],
  fill_confirmed_maria: [
    { icon: 'clock', headline: 'Reviewed autonomous fill', detail: 'My earlier fill for Maria’s shift closed out — Sarah Quinn confirmed for the open RN shift.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'Coverage is secured and the scheduler was already notified, so this is my own work completing successfully — there’s nothing more to do but log it.' },
  ],
  weekly_fill_report: [
    { icon: 'clock', headline: 'Reviewed scheduled report', detail: 'The weekly fill-rate report ran on its configured schedule.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'It’s already posted to the Home dashboard and reflects current numbers, so there’s nothing to intervene on — I’ll just confirm placement and log it.' },
  ],
  invoice_paid_4821: [
    { icon: 'clock', headline: 'Reviewed paid invoice', detail: 'A client marked invoice #4821 as paid, recorded outside Teambridge.' },
    { icon: 'chart', headline: 'Determine recommended course of action', detail: 'The status already reflects reality and there’s no duplicate or follow-up needed, so there’s nothing to act on — I’ll log it.' },
  ],
};

const GENERIC_ANALYZING: AnalyzingStep[] = [
  { icon: 'alert', headline: 'Reading the event', detail: 'Parsing what changed and which people, shifts, and policies it touches.' },
  { icon: 'clock', headline: 'Gathering related records', detail: 'Pulling the schedules, availability, and history relevant to this case.' },
  { icon: 'chart', headline: 'Weighing the options', detail: 'Comparing the viable responses by cost, coverage, and disruption.' },
  { icon: 'done',  headline: 'Preparing a recommendation', detail: 'Shaping the strongest option into a plan you can approve in one step.' },
];

/** The analyzing step sequence for a case (thread-specific or generic). */
export const analyzingSteps = (id: string): AnalyzingStep[] =>
  ANALYZING_ACTIVITIES[id] ?? GENERIC_ANALYZING;

/** The recommendation phrased as a question — a clear call to action that the
 *  decision buttons answer. Shown as the card prompt (falls back to the
 *  imperative `recommendation` if missing). Sourced from each event's "Ask:". */
export const THREAD_PROMPTS: Record<string, string> = {
  shift_drop_maria: 'Want me to reach out to the best replacements and get this shift filled?',
  timeoff_sofia: 'Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?',
  document_kenji: 'It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?',
  application_priya: 'Want me to screen this lead and reach out if they qualify?',
  new_shift_forklift: 'Want me to offer this shift to the best workers and get it claimed?',
  new_user_luis: 'Want me to kick off onboarding for Luis with a welcome and intake tasks?',
  missed_clockin_james: 'Want me to check in with James and update the shift?',
  thread_cancel_wed: 'She’s canceling tomorrow informally — want me to log the release and start a fill?',
  payroll_acme_invoice: 'Want me to roll this approved shift onto the client’s open invoice?',
  job_event_staff: 'Want me to invite the best-matched workers to fill these 20 openings?',
  missed_clockout_bianca: 'Want me to confirm Bianca’s end time and fix the timesheet before payroll?',
  schedule_published: 'Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?',
  shift_release_jenny: 'Want me to reach out to the best replacements and get this shift filled?',
  birthday_tomas: 'Want me to send Tomas a happy birthday message from the team?',
  cred_expired_nadia: 'Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?',
};

/** Real, scenario-specific milestones shown one-by-one while a thread executes
 *  (Live stream): outreach → monitoring → acceptance. Three per case to match
 *  the execution timing. Falls back to generic labels if a case has none. */
/** `icon` is a key mapped to an Alloy icon in the view (fixtures can't hold JSX). */
export type WorkingIcon = 'send' | 'clock' | 'done' | 'rate' | 'chart' | 'edit' | 'alert';

export interface WorkingMilestone {
  icon: WorkingIcon;
  headline: string;
  detail: string;
}

export const WORKING_ACTIVITIES: Record<string, WorkingMilestone[]> = {
  shift_drop_maria: [
    { icon: 'send',  headline: 'Messaged the top replacements', detail: 'Sent the shift details to the best-matched RNs.' },
    { icon: 'clock', headline: 'Collecting confirmations', detail: 'Tracking replies for the first qualified yes.' },
    { icon: 'done',  headline: 'Shift filled', detail: 'Assigned the first qualified RN and notified the scheduler.' },
  ],
  timeoff_sofia: [
    { icon: 'done',  headline: 'Approved Thursday', detail: 'PTO balance confirmed and the Thursday shift is covered.' },
    { icon: 'edit',  headline: 'Held Friday for you', detail: 'Flagged the thin coverage with the one available backup.' },
    { icon: 'send',  headline: 'Sofia notified', detail: 'Confirmed Thursday and that Friday is pending your call.' },
  ],
  document_kenji: [
    { icon: 'edit',  headline: 'Filed as a CPR cert', detail: 'Set the document type and saved the expiry.' },
    { icon: 'done',  headline: 'Marked the credential verified', detail: 'Updated his profile.' },
    { icon: 'alert', headline: 'Flagged the renewal', detail: 'It expires in 3 weeks — surfaced for planning.' },
  ],
  application_priya: [
    { icon: 'edit',  headline: 'Marked Priya qualified', detail: 'Updated the application status.' },
    { icon: 'send',  headline: 'Sent a warm intro', detail: 'Confirmed interest and asked the two screening questions.' },
    { icon: 'done',  headline: 'Moved to the recruiter queue', detail: 'Ready once she replies.' },
  ],
  new_shift_forklift: [
    { icon: 'send',  headline: 'Offered to the top matches', detail: 'Sent the shift in ranked order.' },
    { icon: 'clock', headline: 'Tracking claims', detail: 'Watching for the first claim that clears policy.' },
    { icon: 'done',  headline: 'Shift claimed', detail: 'Assigned the first qualified claim and updated the calendar.' },
  ],
  new_user_luis: [
    { icon: 'send',  headline: 'Sent Luis a welcome', detail: 'Kicked off the candidate onboarding.' },
    { icon: 'edit',  headline: 'Assigned intake tasks', detail: 'Added the 5 required tasks.' },
    { icon: 'done',  headline: 'Following up', detail: 'Tracking each task through to completion.' },
  ],
  missed_clockin_james: [
    { icon: 'send',  headline: 'Texted James', detail: 'Asked whether he’s on his way.' },
    { icon: 'clock', headline: 'Awaiting his reply', detail: 'Will update the shift’s confirmation status from it.' },
    { icon: 'done',  headline: 'Shift updated', detail: 'Flagged the scheduling inbox in case of a no-show.' },
  ],
  thread_cancel_wed: [
    { icon: 'edit',  headline: 'Recorded the release', detail: 'Logged the Wed shift as released on her behalf.' },
    { icon: 'send',  headline: 'Acknowledged her', detail: 'Confirmed she’s off the shift.' },
    { icon: 'done',  headline: 'Replacement search started', detail: 'Opened a fill for the Wed 7:00 AM shift.' },
  ],
  payroll_acme_invoice: [
    { icon: 'edit',  headline: 'Adding the line item', detail: 'Posting the approved shift to Acme’s open invoice.' },
    { icon: 'rate',  headline: 'Recalculating the total', detail: 'Updating the invoice total and net terms.' },
    { icon: 'done',  headline: 'Draft ready', detail: 'Kept ready for your end-of-week review.' },
  ],
  job_event_staff: [
    { icon: 'send',  headline: 'Inviting the top 40 matches', detail: 'Sent slot invitations in ranked order.' },
    { icon: 'clock', headline: 'Tracking responses', detail: 'Filling the 20 openings first-come.' },
    { icon: 'done',  headline: 'Standby list kept', detail: 'Will notify you at 80% filled.' },
  ],
  missed_clockout_bianca: [
    { icon: 'send',  headline: 'Texted Bianca', detail: 'Asked her to confirm her actual end time.' },
    { icon: 'edit',  headline: 'Updating the timesheet', detail: 'Will apply her confirmed end time.' },
    { icon: 'alert', headline: 'Holding for payroll', detail: 'Will flag payroll if she doesn’t reply before the run.' },
  ],
  schedule_published: [
    { icon: 'send',  headline: 'Messaging workers to confirm', detail: 'Asked everyone to confirm next week’s shifts.' },
    { icon: 'clock', headline: 'Chasing the unconfirmed', detail: 'Sending reminders to the 22 outstanding.' },
    { icon: 'done',  headline: 'Readiness summary queued', detail: 'A Monday-readiness summary lands by end of day.' },
  ],
  shift_release_jenny: [
    { icon: 'send',  headline: 'Messaged the best matches', detail: 'Reached out to the qualified caregivers.' },
    { icon: 'clock', headline: 'Collecting confirmations', detail: 'Waiting on the first qualified yes.' },
    { icon: 'done',  headline: 'Shift filled', detail: 'Assigned the replacement and updated the schedule.' },
  ],
  birthday_tomas: [
    { icon: 'send',  headline: 'Sent the birthday note', detail: 'A warm message from the team via in-app chat.' },
  ],
  cred_expired_nadia: [
    { icon: 'alert', headline: 'Flagged the 3 shifts at-risk', detail: 'Marked the CPR-gated shifts.' },
    { icon: 'edit',  headline: 'Assigned a renewal task', detail: 'Added the upload step for Nadia.' },
    { icon: 'done',  headline: 'Backfills lined up', detail: 'Offered to cover the shifts she can’t legally work.' },
  ],
};

/** Multi-step cases: after the first action's work completes, Ultron asks a
 *  follow-up question (the case returns to "Needs attention") before the
 *  second action resolves it. */
/** A record the question references (a worker, shift, location, policy…),
 *  shown as a context card under the prompt. */
export interface RecordRef {
  eyebrow: string;
  title: string;
  meta: string[];
  avatarSeed: string;
}

export interface ThreadFollowUp {
  prompt: string;
  actions: string[];
  working: WorkingMilestone[];
  record?: RecordRef;
}

export const THREAD_FOLLOWUPS: Record<string, ThreadFollowUp> = {
  shift_drop_maria: {
    prompt: 'Renee Wallace replied yes — a strong match. Assign her to cover the shift?',
    actions: ['Review', 'Assign Renee'],
    working: [
      { icon: 'edit',  headline: 'Assigning Renee to the shift', detail: 'Adding Renee Wallace to the 2:00 PM RN shift.' },
      { icon: 'clock', headline: 'Updating the schedule', detail: 'Posting the change so the roster reflects it.' },
      { icon: 'done',  headline: 'Coverage confirmed', detail: 'Shift filled and the scheduler notified.' },
    ],
    record: { eyebrow: 'RN', title: 'Renee Wallace', meta: ['94% match', 'Available now', 'CPR current'], avatarSeed: 'renee_wallace' },
  },
  missed_clockin_james: {
    prompt: 'James says he’s 15 minutes out. Update the shift as confirmed-late?',
    actions: ['Review', 'Confirm late'],
    working: [
      { icon: 'edit',  headline: 'Updating the shift', detail: 'Marking James confirmed, arriving ~15 min late.' },
      { icon: 'send',  headline: 'Notifying the site', detail: 'Letting the location know to expect him shortly.' },
      { icon: 'done',  headline: 'Shift updated', detail: 'No replacement needed — coverage holds.' },
    ],
    record: { eyebrow: 'Worker', title: 'James Okoro', meta: ['On his way', '~15 min late', 'Replied via SMS'], avatarSeed: 'missed_clockin_james' },
  },
  application_priya: {
    prompt: 'Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?',
    actions: ['Review', 'Move to queue'],
    working: [
      { icon: 'edit',  headline: 'Moving Priya to the queue', detail: 'Handing her off to the recruiter as Qualified.' },
      { icon: 'send',  headline: 'Notifying the recruiter', detail: 'Sharing her answers and the 92% match.' },
      { icon: 'done',  headline: 'In the recruiter’s queue', detail: 'Ready for the next step.' },
    ],
    record: { eyebrow: 'CNA', title: 'Priya Raman', meta: ['92% match', 'Screened', 'Night Shift'], avatarSeed: 'application_priya' },
  },
};

/** Stage-0 record(s) referenced by each thread's question. A single record for
 *  most cases; a short ranked list where the question is about choosing among
 *  candidates (rendered as a vertical stack of record cards). */
export const THREAD_RECORDS: Record<string, RecordRef | RecordRef[]> = {
  shift_drop_maria: [
    { eyebrow: 'RN', title: 'Renee Wallace', meta: ['94% match', 'Available now', 'CPR current'], avatarSeed: 'renee_wallace' },
    { eyebrow: 'RN', title: 'Carl Jensen',   meta: ['90% match', 'Available now', 'Within radius'], avatarSeed: 'carl_jensen' },
    { eyebrow: 'RN', title: 'Tina Boyd',     meta: ['87% match', 'Available now', 'No OT conflict'], avatarSeed: 'tina_boyd' },
  ],
  timeoff_sofia:        { eyebrow: 'PTO request', title: 'Sofia Marin', meta: ['Thu–Fri', '2 shifts inside', 'Balance OK'], avatarSeed: 'timeoff_sofia' },
  document_kenji:       { eyebrow: 'Document', title: 'CPR Certification', meta: ['Kenji Tanaka', 'Expires in 3 weeks', 'Valid'], avatarSeed: 'document_kenji' },
  application_priya:    { eyebrow: 'CNA · New Lead', title: 'Priya Raman', meta: ['92% match', 'Night Shift', 'Downtown'], avatarSeed: 'application_priya' },
  new_user_luis:        { eyebrow: 'Candidate', title: 'Luis Mendez', meta: ['New record', '5 intake tasks', 'No tasks yet'], avatarSeed: 'new_user_luis' },
  missed_clockin_james: { eyebrow: 'Worker', title: 'James Okoro', meta: ['9:00 AM shift', 'No clock-in', 'Grace elapsed'], avatarSeed: 'missed_clockin_james' },
  thread_cancel_wed:    { eyebrow: 'Open Wed shift', title: 'Wed · 7:00 AM', meta: ['Pier 9', 'Informal cancel', 'No release filed'], avatarSeed: 'thread_cancel_wed' },
  missed_clockout_bianca:{ eyebrow: 'Open timesheet', title: 'Bianca Rossi', meta: ['No clock-out', 'Off-site ~6:05 PM', 'Held from payroll'], avatarSeed: 'missed_clockout_bianca' },
  cred_expired_nadia:   { eyebrow: 'Policy', title: 'Nadia Haddad', meta: ['CPR expired', '3 shifts at risk', 'Backfills ready'], avatarSeed: 'cred_expired_nadia' },
};

/** A discrete step in a decision's plan — what Ultron will run, in order, if the
 *  operator approves. Replaces the flat candidate-card list on the decision
 *  surface so a bundled "do A and B" prompt reads as its constituent tasks. */
export interface PlanTask {
  label: string;
  /** A secondary line under the label — what the step actually does, in a
   *  sentence (shown muted beneath the task title). */
  detail?: string;
  /** When set, the task surfaces the thread's candidate records as a stacked
   *  avatar group (the people it would contact) instead of plain text. */
  showsCandidates?: boolean;
  /** A single person the task acts on (e.g. the manager to notify) — shown as
   *  one avatar + name in the trailing slot. */
  person?: { name: string; avatarSeed: string };
}

/** Per-thread task breakdown for the docked decision surface. A thread with an
 *  entry here renders its plan as tasks; others keep the candidate-card list.
 *  Sourced from each event's "What I'd do" steps. */
export const THREAD_TASKS: Record<string, PlanTask[]> = {
  shift_drop_maria: [
    { label: 'Message the best-matched replacements', detail: 'Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.', showsCandidates: true },
    { label: 'Confirm and assign shift', detail: 'Communicate the need with staff, and assign them to the shift if they agree.' },
    { label: 'Notify the location manager', detail: 'Notify the location manager of the last-minute scheduling change.', person: { name: 'Dana Cole', avatarSeed: 'scheduler_dana' } },
  ],
  timeoff_sofia: [
    { label: 'Confirm the PTO balance covers it' },
    { label: 'Auto-approve the Thursday portion' },
    { label: 'Flag Friday for you', person: { name: 'You', avatarSeed: 'operator' } },
  ],
  document_kenji: [
    { label: 'Set the type to CPR Cert and save the expiry' },
    { label: 'Mark the credential verified' },
    { label: 'Flag that it expires soon' },
  ],
  application_priya: [
    { label: 'Update the status to Qualified' },
    { label: 'Send a warm intro message' },
    { label: 'Ask the two screening questions' },
    { label: 'Move to the recruiter’s queue on reply' },
  ],
  new_shift_forklift: [
    { label: 'Offer to the top matches in ranked order', showsCandidates: true },
    { label: 'Assign the first claim that clears policy' },
    { label: 'Confirm and update the calendar' },
  ],
  new_user_luis: [
    { label: 'Send Luis a welcome message' },
    { label: 'Assign the required intake tasks' },
    { label: 'Follow up until everything’s completed' },
  ],
  missed_clockin_james: [
    { label: 'Text James to ask if he’s on his way', person: { name: 'James Okoro', avatarSeed: 'missed_clockin_james' } },
    { label: 'Update the shift’s confirmation status' },
    { label: 'Flag the scheduling inbox if he’s a no-show' },
  ],
  thread_cancel_wed: [
    { label: 'Record the shift as released on her behalf' },
    { label: 'Reply to acknowledge she’s off it' },
    { label: 'Start a replacement search for the Wed shift' },
  ],
  payroll_acme_invoice: [
    { label: 'Add the shift as a line item' },
    { label: 'Recalculate the invoice total and terms' },
    { label: 'Keep the draft ready for your review' },
  ],
  job_event_staff: [
    { label: 'Invite the top 40 matches', showsCandidates: true },
    { label: 'Fill the 20 openings first-come' },
    { label: 'Keep a standby list and notify you at 80%' },
  ],
  missed_clockout_bianca: [
    { label: 'Text Bianca to confirm her actual end time' },
    { label: 'Update the timesheet from her reply' },
    { label: 'Flag payroll if she doesn’t respond' },
  ],
  schedule_published: [
    { label: 'Message all workers to confirm' },
    { label: 'Chase the unconfirmed with a reminder' },
    { label: 'Give you a Monday-readiness summary' },
  ],
  shift_release_jenny: [
    { label: 'Message the best-matched replacements', showsCandidates: true },
    { label: 'Assign the first qualified yes' },
    { label: 'Confirm the fill and update the schedule' },
  ],
  cred_expired_nadia: [
    { label: 'Flag her 3 upcoming shifts as at-risk' },
    { label: 'Assign Nadia a renewal task with the upload' },
    { label: 'Offer to backfill the shifts she can’t work' },
  ],
};

/** Ultron's full read on a case, communicated as a short message after the
 *  (collapsed) thinking group — returned as separate paragraphs so it reads in
 *  digestible beats: the reasoning from the start (how it sized up the situation
 *  and the risk), then a closing beat. For a case awaiting a decision that closing
 *  beat is the concrete plan it's asking to approve; for a resolved / workflow-ready
 *  case it's the outcome. The reasoning is the case's own analysis narrative; the
 *  plan mirrors the task breakdown (or the recommendation). */
export function caseSummary(thread: ThreadItem): string[] {
  // Each analysis step's detail line becomes its own paragraph, in order (the
  // closing "Plan created and shared" step carries no detail, so it drops).
  const paragraphs = analyzingSteps(thread.id).map(s => s.detail).filter(Boolean);

  const awaiting = thread.status === 'needs_approval' || thread.status === 'recommended';
  if (awaiting) {
    const tasks = THREAD_TASKS[thread.id];
    if (tasks?.length) {
      const steps = tasks.map(t => t.label.charAt(0).toLowerCase() + t.label.slice(1));
      const list = steps.length > 1
        ? `${steps.slice(0, -1).join(', ')}, and ${steps[steps.length - 1]}`
        : steps[0];
      paragraphs.push(`Here’s my plan — I’ll ${list}. Approve below and I’ll get started.`);
    } else {
      paragraphs.push(`Here’s my plan — ${thread.recommendation} Approve below and I’ll get started.`);
    }
  } else {
    // Resolved / workflow-ready: close on the outcome — unless the case needed no
    // action (its reasoning already concludes that, so an outcome line just repeats it).
    const noAction = thread.recommendation.trim().toLowerCase().startsWith('no action');
    if (!noAction && thread.outcome) paragraphs.push(thread.outcome);
  }

  return paragraphs;
}

/** Past-activity breakdown shown (expandable) on a resolved card. A block is a
 *  paragraph, and/or a labeled bullet list, a labeled check list, and/or a list
 *  of referenced records (people/shifts) rendered as record cards. */
export interface ActivityBlock {
  text?: string;
  label?: string;
  bullets?: string[];
  checks?: string[];
  records?: RecordRef[];
}

export interface ActivityMilestone {
  icon: WorkingIcon;
  headline: string;
  blocks?: ActivityBlock[];
}

const THREAD_ACTIVITY: Record<string, ActivityMilestone[]> = {
  // New-group cases read as a tight thinking sequence: the detection facts are
  // folded into the analyzing steps (see ANALYZING_ACTIVITIES), so the event
  // trail carries no separate milestones — the reasoning IS the whole trail.
  shift_drop_maria: [],
  timeoff_sofia: [],
  document_kenji: [],
  application_priya: [],
  new_shift_forklift: [],
  new_user_luis: [],
  missed_clockin_james: [],
  thread_cancel_wed: [],
  payroll_acme_invoice: [],
  job_event_staff: [],
  missed_clockout_bianca: [],
  schedule_published: [],
  shift_release_jenny: [
    {
      icon: 'send',
      headline: 'Messaged the best matches',
      blocks: [
        { text: 'Ultron reached out to the qualified caregivers in ranked order.' },
        { label: 'Top matches', records: [
          { eyebrow: 'Caregiver', title: 'Renee Wallace', meta: ['94% match', 'Available now'], avatarSeed: 'renee_wallace' },
          { eyebrow: 'Caregiver', title: 'Carl Jensen',   meta: ['90% match', 'Available now'], avatarSeed: 'carl_jensen' },
          { eyebrow: 'Caregiver', title: 'Tina Boyd',     meta: ['87% match', 'Available now'], avatarSeed: 'tina_boyd' },
        ] },
      ],
    },
    {
      icon: 'done',
      headline: 'Renee Wallace assigned — coverage restored',
      blocks: [{ checks: ['Shift assigned to Renee Wallace', 'Schedule updated', 'Coverage restored'] }],
    },
  ],
  fill_confirmed_maria: [
    {
      icon: 'edit',
      headline: 'Coverage secured',
      blocks: [{ checks: ['Shift covered', 'Scheduler notified', 'No further action needed'] }],
    },
    {
      icon: 'done',
      headline: 'Logged',
      blocks: [{ text: 'Recorded automatically — this was my own fill closing successfully.' }],
    },
  ],
  cred_expired_nadia: [
    {
      icon: 'send',
      headline: 'Renewal started + backfills lined up',
      blocks: [
        { text: 'Ultron flagged the at-risk shifts, assigned a renewal task, and offered backfills.' },
        { label: 'Plan', checks: ['3 shifts flagged at-risk', 'Renewal task assigned to Nadia', 'Backfills lined up for all 3'] },
      ],
    },
    {
      icon: 'done',
      headline: 'Recurring pattern ready to save as a workflow',
      blocks: [{ text: 'Credential lapses recur — Ultron can monitor them and auto-start renewals as a saved workflow.' }],
    },
  ],
  birthday_tomas: [
    {
      icon: 'done',
      headline: 'Birthday note sent',
      blocks: [{ text: 'A warm happy-birthday message went out to Tomas from the team.' }],
    },
  ],
  weekly_fill_report: [
    {
      icon: 'done',
      headline: 'Posted to the Home dashboard',
      blocks: [{ text: 'It’s already on your Home dashboard — no intervention required.' }],
    },
  ],
  clockin_devon: [
    {
      icon: 'done',
      headline: 'No action needed',
      blocks: [{ checks: ['Inside the geofence', 'All required fields filled', 'System working as intended'] }],
    },
  ],
  phone_aisha: [
    {
      icon: 'done',
      headline: 'No action needed',
      blocks: [{ text: 'No downstream policy or workflow depends on it — logged.' }],
    },
  ],
  invoice_paid_4821: [
    {
      icon: 'done',
      headline: 'No action needed',
      blocks: [{ text: 'The record reflects reality — nothing for me to act on.' }],
    },
  ],
};

const STATE_ICON: Record<string, WorkingIcon> = {
  detected: 'clock', assessment: 'alert', recommendation: 'send',
  approval: 'edit', execution: 'edit', resolution: 'done',
  monitoring: 'clock', workflow: 'done',
};

/** Per-state detail sentence, sourced from the thread's own narrative fields so
 *  every derived milestone carries a sub-level explanation. Falls back to the
 *  assessment (always present) when the preferred field is empty. */
const STATE_DETAIL: Record<string, (t: ThreadItem) => string | null | undefined> = {
  detected:       t => t.event,
  assessment:     t => t.assessment,
  recommendation: t => t.recommendation,
  approval:       t => t.recommendation,
  execution:      t => t.recommendation,
  resolution:     t => t.outcome ?? t.recommendation,
  monitoring:     t => t.assessment,
  workflow:       t => t.workflowOpportunity ?? t.recommendation,
};

/** The activity breakdown for a thread: an authored rich version where one
 *  exists, otherwise derived from the timeline — each step gets a detail block
 *  drawn from the thread's narrative so no milestone is left bare. */
export function activityForThread(thread: ThreadItem): ActivityMilestone[] {
  // Normalize for the dedupe check below — ignore case and trailing punctuation
  // so "Two RNs called out…" and "Two RNs called out….​" count as the same line.
  const norm = (s: string) => s.trim().replace(/[.\s]+$/, '').toLowerCase();
  return THREAD_ACTIVITY[thread.id]
    ?? thread.timeline.map(s => {
      const detail = STATE_DETAIL[s.state]?.(thread) ?? thread.assessment;
      // Drop the sub-context when it just restates the headline (e.g. an
      // event-spawned case whose detected detail is the title verbatim) — a
      // repeated line reads as redundant noise.
      const redundant = detail != null && norm(detail) === norm(s.headline);
      return {
        icon: STATE_ICON[s.state] ?? 'clock',
        headline: s.headline,
        blocks: detail && !redundant ? [{ text: detail }] : undefined,
      };
    });
}

/** The tools, skills, and data sources an activity drew on — surfaced under each
 *  activity on demand. Keyed by the activity's icon (its kind) so every activity
 *  carries a plausible, relevant set without per-milestone authoring. */
export interface ActivityUsage { tools: string[]; skills: string[]; data: string[]; }

const USAGE_BY_ICON: Record<WorkingIcon, ActivityUsage> = {
  send:  { tools: ['Messaging', 'Push notifications'], skills: ['Outreach drafting', 'Recipient targeting'], data: ['Worker contacts', 'Shift details'] },
  clock: { tools: ['Schedule API', 'Time clock'],      skills: ['Shift monitoring'],                         data: ['Shift records', 'Punch history'] },
  done:  { tools: ['Schedule API'],                    skills: ['Shift assignment'],                         data: ['Shift records', 'Worker profiles'] },
  rate:  { tools: ['Pay engine'],                      skills: ['Rate optimization'],                        data: ['Pay rates', 'Budget headroom'] },
  chart: { tools: ['Analytics engine'],                skills: ['Demand forecasting', 'Scenario modeling'],  data: ['Historical fills', 'Staffing levels'] },
  edit:  { tools: ['Schedule API'],                    skills: ['Candidate ranking'],                        data: ['Worker profiles', 'Availability'] },
  alert: { tools: ['Policy engine'],                   skills: ['Risk assessment'],                          data: ['Policy rules', 'Staffing minimums'] },
};

/** The tools / skills / data an activity used, derived from its icon (kind). */
export const activityUsage = (icon: WorkingIcon): ActivityUsage => USAGE_BY_ICON[icon] ?? USAGE_BY_ICON.clock;

/** The combined, deduped usage across several activities — the full set of tools,
 *  skills, and data that applied to ALL activities in a group. Surfaced once,
 *  under the group's last activity, so it reads as the group's whole toolkit
 *  rather than a single step's. Order follows first appearance across the group. */
export const aggregateUsage = (icons: WorkingIcon[]): ActivityUsage => {
  const merge = (pick: (u: ActivityUsage) => string[]) =>
    [...new Set(icons.flatMap(i => pick(activityUsage(i))))];
  return {
    tools: merge(u => u.tools),
    skills: merge(u => u.skills),
    data: merge(u => u.data),
  };
};

// ── Live landing — incoming signal stream ──────────────────────────────────
// The Live landing feed is a conveyor of incoming operational signals Ultron is
// watching. Each carries a trailing identifier: most are routine ("No action
// required"), but some are real risks ("Risk detected") — those show the orange
// Pulse mark and, the moment they surface, escalate into a fresh New case.

/** One signal in the Live landing feed. */
export interface IncomingEvent {
  id: string;
  /** Capability eyebrow shown above the title. */
  capability: string;
  /** Event headline shown in the feed card. */
  title: string;
  /** Short case name used as the New-group nav label when a risk escalates. */
  name: string;
  /** A real risk: shows the orange Pulse mark and escalates into the New group
   *  as a fresh analyzing case. Routine signals (false) read "No action required". */
  risk: boolean;
  severity?: ThreadSeverity;
  assessment?: string;
  recommendation?: string;
}

/** The signal stream cycled through the Live landing feed (interleaved risk /
 *  routine so the conveyor reads as a live mix). Drawn from the same seed-data
 *  vocabulary as the cases above. */
export const INCOMING_EVENTS: IncomingEvent[] = [
  {
    id: 'riverside_shift_drop',
    capability: 'Coverage Recovery',
    title: 'An RN dropped this afternoon’s shift at Riverside Clinic',
    name: 'Shift Drop Recovery',
    risk: true,
    severity: 'high',
    assessment: 'Urgent fill — the shift starts in under 12 hours with no replacement.',
    recommendation: 'Reach out to the best-matched RNs and fill it.',
  },
  {
    id: 'eastgate_clockin',
    capability: 'Attendance',
    title: 'Clean clock-in at Eastgate Warehouse',
    name: 'Clean Clock-In',
    risk: false,
  },
  {
    id: 'missed_clockin_signal',
    capability: 'Attendance Recovery',
    title: 'A worker never started their 9am shift',
    name: 'Missed Clock-In',
    risk: true,
    severity: 'high',
    assessment: 'The start passed with no clock-in and the grace window has elapsed.',
    recommendation: 'Check if they’re on the way and update the shift.',
  },
  {
    id: 'schedule_published_signal',
    capability: 'Scheduling',
    title: 'Next week’s schedule published',
    name: 'Schedule Published',
    risk: false,
  },
  {
    id: 'cpr_lapse_signal',
    capability: 'Compliance',
    title: 'A CPR certification expired overnight',
    name: 'Credential Lapse',
    risk: true,
    severity: 'medium',
    assessment: 'CPR is required for the role and upcoming shifts would be non-compliant.',
    recommendation: 'Pull from the affected shifts and start renewal.',
  },
  {
    id: 'invoice_paid_signal',
    capability: 'Invoicing',
    title: 'Client marked an invoice as paid',
    name: 'Invoice Paid',
    risk: false,
  },
  {
    id: 'open_timesheet_signal',
    capability: 'Payroll Operations',
    title: 'A timesheet has no clock-out before the payroll run',
    name: 'Open Timesheet',
    risk: true,
    severity: 'medium',
    assessment: 'The shift ended with no clock-out — the open punch is held from payroll.',
    recommendation: 'Confirm the real end time and fix the timesheet.',
  },
  {
    id: 'birthday_signal',
    capability: 'Engagement',
    title: 'An employee’s birthday is today',
    name: 'Birthday Greeting',
    risk: false,
  },
];

/** Build a fresh analyzing case from a detected risk signal — the case that
 *  lands in the New group (orbit/working mark, typing title) the moment Ultron
 *  flags the risk. Minimal but complete enough to flow through the case
 *  pipeline (analyzing → Needs approval → …) via the generic fallbacks. */
export function spawnThreadFromEvent(ev: IncomingEvent): ThreadItem {
  return {
    id: `detected_${ev.id}`,
    name: ev.name,
    title: ev.title,
    capability: ev.capability,
    status: 'analyzing',
    severity: ev.severity ?? 'high',
    event: ev.title.endsWith('.') ? ev.title : `${ev.title}.`,
    assessment: ev.assessment ?? 'Assessing impact and weighing options before recommending a plan.',
    recommendation: ev.recommendation ?? 'Prepare a recommended plan for your approval.',
    outcome: null,
    workflowOpportunity: null,
    timeline: [
      { state: 'detected', headline: ev.title, done: true },
      { state: 'assessment', headline: 'Assessing impact and options', done: false },
    ],
    actions: ['Review plan', 'Approve plan'],
    timestamp: 'Just now',
  };
}

/** Outcome populated when an actioned thread auto-completes (demo lifecycle:
 *  Needs attention → Live stream → Resolved). */
export const RESOLVE_OUTCOMES: Record<string, string> = {
  shift_drop_maria: 'Replacement assigned — coverage restored and the scheduler notified.',
  timeoff_sofia: 'Thursday approved; Friday held for your call.',
  document_kenji: 'CPR cert filed and verified — renewal flagged for 3 weeks out.',
  application_priya: 'Priya screened and moved to the recruiter’s queue.',
  new_shift_forklift: 'Shift offered and claimed — calendar updated.',
  new_user_luis: 'Onboarding kicked off — welcome sent and intake tasks assigned.',
  missed_clockin_james: 'Checked in with James and updated the shift.',
  thread_cancel_wed: 'Release logged and a replacement search started for the Wed shift.',
  payroll_acme_invoice: 'Shift rolled onto Acme’s open invoice — total recalculated.',
  job_event_staff: 'Invitations sent — openings filling first-come with a standby list.',
  missed_clockout_bianca: 'End time confirmed and the timesheet corrected before payroll.',
  schedule_published: 'Confirmations sent — chasing the 22 unconfirmed shifts.',
  shift_release_jenny: 'Replacement assigned — coverage restored.',
  birthday_tomas: 'Birthday note sent to Tomas from the team.',
  cred_expired_nadia: 'Renewal started and backfills lined up for the 3 affected shifts.',
};

// ── Ultron chat replies ───────────────────────────────────────────────────────
// DEMO ONLY — canned responses Ultron gives to a free-text message typed into the
// composer. There's no backend or real generation: the reply cycles through this
// pool (indexed by how many times Ultron has answered in the thread) so a short
// back-and-forth reads naturally instead of repeating the same line.
const ULTRON_REPLIES = [
  'Got it — I’ll factor that in and update my recommendation.',
  'Understood. Let me re-check the coverage with that in mind and flag anything that shifts.',
  'Thanks for the context — I’ll adjust the plan and keep you posted as it runs.',
  'Noted. I’ll hold that step for now and keep monitoring in the meantime.',
];

/** Pick Ultron's mocked reply to an operator message. `index` is the count of
 *  replies Ultron has already given in this thread, so consecutive answers walk
 *  through the pool rather than echoing one another. */
export function mockUltronReply(_text: string, index: number): string {
  return ULTRON_REPLIES[index % ULTRON_REPLIES.length];
}
