import { useRef, useState } from 'react';
import FeedbackBubble from './FeedbackBubble.jsx';

export default function SuspiciousPart({ part, selected = [], phase = 'selecting', markStatus, feedback, selectionLocked = false, onInspect, onContinue, onSelect }) {
  const anchorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const legacySelected = Array.isArray(selected) ? selected : [];
  const active = feedback?.id === part?.id || legacySelected.includes(part?.id);
  const tone = active ? feedback?.tone ?? (legacySelected.includes(part?.id) ? 'correct' : undefined) : markStatus;
  const bubbleTone = feedback?.tone ?? tone ?? 'incorrect';
  const bubbleTitle = feedback?.title ?? part?.label ?? 'Indicator';
  const bubbleBody = feedback?.body ?? part?.explanation ?? '';
  const showBubble = active || (isHovered && Boolean(markStatus));
  const hoverTitle = tone === 'correct' ? 'Correct decision' : 'Incorrect decision';
  const hoverBody = part?.explanation || (tone === 'correct' ? 'This part is a phishing clue.' : 'This part is not a phishing clue.');

  const getClass = () => {
    const base = selectionLocked ? 'relative inline cursor-default rounded transition-all duration-150' : 'relative inline cursor-pointer rounded transition-all duration-150';
    if (tone === 'correct') return `${base} bg-green-100`;
    if (tone === 'incorrect') return `${base} bg-red-100`;
    return selectionLocked ? base : `${base} hover:bg-amber-100`;
  };

  const icon = tone === 'correct' ? '✓' : tone === 'incorrect' ? '✕' : null;

  const handleInspect = () => {
    if (active || selectionLocked) return;
    if (onInspect) onInspect(part);
    else if (onSelect && part?.id && phase === 'selecting') onSelect(part.id);
  };

  return (
    <span className="relative inline">
      <span ref={anchorRef} className={`${getClass()} leading-7`} onClick={handleInspect} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {icon && <span className={`mr-1 ${tone === 'correct' ? 'text-green-500' : 'text-red-500'}`}>{icon}</span>}
        {part.text}
      </span>
      {showBubble && (
        <FeedbackBubble
          anchorRef={anchorRef}
          tone={active ? bubbleTone : tone}
          title={active ? bubbleTitle : hoverTitle}
          body={active ? bubbleBody : hoverBody}
          onContinue={onContinue}
          widthClass="w-52"
          overlap
          showContinue={active}
        />
      )}
    </span>
  );
}

