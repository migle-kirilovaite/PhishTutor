import { useRef, useState } from 'react';
import FeedbackBubble from './FeedbackBubble';

export default function HeaderField({ variant = 'row', label, value, secondary, rightText, id, suspicious, suspicionLabel, explanation, markStatus, feedback, selectionLocked = false, onInspect, onContinue }) {
    const anchorRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const active = feedback?.id === id;
    const tone = active ? feedback.tone : markStatus;
    const showBubble = active || (isHovered && Boolean(markStatus));
    const bubbleTitle = active
        ? feedback.title
        : tone === 'correct'
            ? 'Correct decision'
            : 'Incorrect decision';
    const bubbleBody = active
        ? feedback.body
        : explanation || (tone === 'correct'
            ? 'This part is a phishing clue.'
            : 'This part is not a phishing clue.');
    const handleContinue = () => {
        setIsHovered(false);
        onContinue?.();
    };

    const getClass = () => {
        const base = selectionLocked ? 'relative inline-block cursor-default rounded px-0.5 transition-all duration-150' : 'relative inline-block cursor-pointer rounded px-0.5 transition-all duration-150';
        if (tone === 'correct') return `${base} bg-green-100`;
        if (tone === 'incorrect') return `${base} bg-red-100`;
        return selectionLocked ? base : `${base} hover:bg-amber-100`;
    };

    const icon = tone === 'correct' ? '✓' : tone === 'incorrect' ? '✕' : null;

    const handleInspect = () => {
        if (active || selectionLocked) return;
        onInspect({ id, suspicious, label: suspicionLabel ?? label ?? value, explanation, value });
    };

    const bubble = showBubble ? (
        <FeedbackBubble
            anchorRef={anchorRef}
            tone={active ? feedback.tone : tone}
            title={bubbleTitle}
            body={bubbleBody}
            onContinue={handleContinue}
            showContinue={active}
        />
    ) : null;

    if (variant === 'subject') {
        return (
            <div className="flex items-start gap-3">
        <span ref={anchorRef} className={`${getClass()} text-[clamp(1.2rem,2vw,1.65rem)] font-medium leading-tight text-stone-800`} onClick={handleInspect} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {icon && <span className={`mr-1.5 text-[1.25rem] leading-none ${tone === 'correct' ? 'text-green-500' : 'text-red-500'}`}>{icon}</span>}
            {value}
            {bubble}
        </span>
                {tone && <span className="rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-stone-400">Inbox</span>}
            </div>
        );
    }

    if (variant === 'sender') {
        return (
            <div className="flex items-start justify-between gap-4 text-xs text-stone-400">
                <div className="flex min-w-0 items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-[0.65rem] font-semibold text-stone-400">@</div>
                    <div className="min-w-0">
            <span ref={anchorRef} className={`${getClass()} font-semibold text-stone-700`} onClick={handleInspect} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {icon && <span className={`mr-1 text-[0.95rem] leading-none ${tone === 'correct' ? 'text-green-500' : 'text-red-500'}`}>{icon}</span>}
                {value}
                {bubble}
            </span>
                        {secondary && <div className="text-[0.7rem] text-stone-400">{secondary}</div>}
                    </div>
                </div>
                {rightText && <div className="text-[0.68rem] text-stone-300">{rightText}</div>}
            </div>
        );
    }

    return (
        <div className="flex items-start gap-2 text-[0.72rem] leading-5">
            <span className="w-14 flex-shrink-0 pt-0.5 text-stone-400">{label}</span>
            <span ref={anchorRef} className={`relative ${getClass()}`} onClick={handleInspect} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {value}
                {bubble}
      </span>
        </div>
    );
}