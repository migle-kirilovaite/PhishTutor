import { createPortal } from 'react-dom';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

export default function FeedbackBubble({ anchorRef, tone = 'incorrect', title, body, onContinue, widthClass = 'w-56', overlap = false, showContinue = true }) {
  const [rect, setRect] = useState(null);
  const bubbleBg = tone === 'correct' ? 'bg-green-400' : 'bg-red-400';
  const arrowBorder = tone === 'correct' ? 'border-r-green-400' : 'border-r-red-400';

  const updatePosition = useCallback(() => {
    const el = anchorRef?.current;
    if (!el) return;
    setRect(el.getBoundingClientRect());
  }, [anchorRef]);

  useLayoutEffect(() => {
    updatePosition();
  }, [updatePosition]);

  useEffect(() => {
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [updatePosition]);

  if (!rect) return null;

  return createPortal(
    <span
      className={`fixed z-[9999] ${widthClass} rounded-xl px-3 py-2 text-xs leading-relaxed text-white shadow-xl pointer-events-auto ${bubbleBg}`}
      style={{ top: `${rect.top + rect.height / 2}px`, left: `${rect.right + (overlap ? 8 : 30)}px`, transform: 'translateY(-50%)' }}
    >
      <strong className="mb-0.5 block text-[0.72rem] uppercase tracking-wide">{title}</strong>
      {body}
      {showContinue && (
        <div className="mt-4 flex justify-center">
          <button onClick={onContinue} className="rounded-md bg-stone-800 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-stone-900">
            Continue
          </button>
        </div>
      )}
      <span className={`absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 border-y-8 border-y-transparent border-r-8 ${arrowBorder}`} />
    </span>,
    document.body,
  );
}

