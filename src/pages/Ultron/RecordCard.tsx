/* ─────────────────────────────────────────────────────────────────────────────
   Ultron — Record card.
   A compact context reference to the record a question is about (worker, shift,
   location, policy…): avatar + role eyebrow + title + dot-separated meta, with
   an open-record affordance. Bordered, rounded, sits under the prompt.
   ───────────────────────────────────────────────────────────────────────────── */

import styled from 'styled-components';
import { Avatar, Button, ArrowUpRightIcon } from 'alloy-design-system';
import type { RecordRef } from './fixtures';
import { threadAvatarUrl } from './fixtures';

export function RecordCard({ record }: { record: RecordRef }) {
  return (
    <Card>
      <Avatar size="md" src={threadAvatarUrl(record.avatarSeed)} name={record.title} alt={record.title} />
      <Body>
        <Title>{record.title}</Title>
        {/* Two-line card: the role eyebrow is folded into the meta line as its
            first segment rather than sitting on its own row. */}
        <Meta>{[record.eyebrow, ...record.meta].join(' · ')}</Meta>
      </Body>
      <Button variant="ghost" size="xs" iconOnly aria-label="Open record">
        <ArrowUpRightIcon size={16} />
      </Button>
    </Card>
  );
}

// ── Styled ───────────────────────────────────────────────────────────────────

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`;

const Title = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;

const Meta = styled.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`;
