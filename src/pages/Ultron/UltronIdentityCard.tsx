/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — identity card.
   Sits at the top of the Ultron secondary-nav body. Shows the Ultron identity
   (the animated Circle mark used on the Live landing) beside the Ultron name and
   a "Live" status badge — a compact presence card, no cycling status line.
   ───────────────────────────────────────────────────────────────────────────── */

import styled from 'styled-components';
import { Badge } from 'alloy-design-system';
import { AgentMark } from './AgentMark';

/** Rendered px of the Circle mark in the identity card — small enough to ride the
 *  nav row while still reading as Ultron's living presence (same mark shown at
 *  hero scale on the Live landing). */
const MARK_SIZE = 32;

/** Identity row for the Ultron secondary nav: the animated Circle mark, the name,
 *  and a "Live" presence badge. */
export function UltronIdentityCard() {
  return (
    <Card>
      <Mark aria-hidden="true">
        <AgentMark mark="circle" size={MARK_SIZE} tone="auto" state="active" aria-label="Ultron" />
      </Mark>
      <Name>Ultron</Name>
      <Badge variant="success">Live</Badge>
    </Card>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`;

/* Holds the animated Circle mark at a fixed size so the name + badge keep a
   stable left edge as the mark breathes. */
const Mark = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${MARK_SIZE}px;
  height: ${MARK_SIZE}px;
`;

const Name = styled.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;
