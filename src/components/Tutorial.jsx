import { useEffect, useMemo, useState } from 'react';
import { TUTORIAL_STEPS } from '../data/phishingGame.js';

export default function Tutorial({ onClose }) {
  const [step, setStep] = useState(0);
  const current = TUTORIAL_STEPS[step];
  const [layout, setLayout] = useState(null);

  useEffect(() => {
    if (!current) return undefined;

    const updateLayout = () => {
      const sidebarEl = document.querySelector('[data-tutorial-target="sidebar"]');
      const targetEl = document.querySelector(`[data-tutorial-target="${current.target}"]`);
      if (!sidebarEl || !targetEl) {
        setLayout(null);
        return;
      }

      const sidebarRect = sidebarEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const bubbleWidth = 242;
      const bubbleHeight = 112;
      const gap = 14;

      const canPlaceRight = sidebarRect.right + gap + bubbleWidth < window.innerWidth - 10;
      const placement = canPlaceRight ? 'right' : 'left';
      const rawLeft = canPlaceRight
        ? sidebarRect.right + gap
        : Math.max(10, sidebarRect.left - bubbleWidth - gap);
      const left = Math.min(Math.max(10, rawLeft), window.innerWidth - bubbleWidth - 10);
      const rawTop = targetRect.top + targetRect.height / 2 - bubbleHeight / 2;
      const top = Math.min(Math.max(10, rawTop), window.innerHeight - bubbleHeight - 10);

      setLayout({ sidebarRect, targetRect, bubble: { left, top, width: bubbleWidth, height: bubbleHeight }, placement });
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    window.addEventListener('scroll', updateLayout, true);
    return () => {
      window.removeEventListener('resize', updateLayout);
      window.removeEventListener('scroll', updateLayout, true);
    };
  }, [current]);

  const progressLabel = useMemo(() => `${step + 1}/${TUTORIAL_STEPS.length}`, [step]);

  if (!current || !layout) return null;

  const handleProceed = () => {
    if (step < TUTORIAL_STEPS.length - 1) setStep((s) => s + 1);
    else onClose();
  };

  const sidebarTop = Math.max(0, layout.sidebarRect.top);
  const sidebarBottom = Math.min(window.innerHeight, layout.sidebarRect.bottom);
  const sidebarLeft = Math.max(0, layout.sidebarRect.left);
  const sidebarRight = Math.min(window.innerWidth, layout.sidebarRect.right);
  const targetTop = Math.max(sidebarTop, layout.targetRect.top);
  const targetBottom = Math.min(sidebarBottom, layout.targetRect.bottom);
  const targetLeft = Math.max(sidebarLeft, layout.targetRect.left);
  const targetRight = Math.min(sidebarRight, layout.targetRect.right);

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute left-0 top-0 bg-black/55" style={{ width: '100%', height: sidebarTop }} />
      <div className="absolute left-0 bg-black/55" style={{ top: sidebarTop, width: sidebarLeft, height: Math.max(0, sidebarBottom - sidebarTop) }} />
      <div className="absolute right-0 bg-black/55" style={{ top: sidebarTop, width: Math.max(0, window.innerWidth - sidebarRight), height: Math.max(0, sidebarBottom - sidebarTop) }} />
      <div className="absolute left-0 bg-black/55" style={{ top: sidebarBottom, width: '100%', height: Math.max(0, window.innerHeight - sidebarBottom) }} />

      <div className="absolute bg-black/40" style={{ left: sidebarLeft, top: sidebarTop, width: Math.max(0, sidebarRight - sidebarLeft), height: Math.max(0, targetTop - sidebarTop) }} />
      <div className="absolute bg-black/40" style={{ left: sidebarLeft, top: targetBottom, width: Math.max(0, sidebarRight - sidebarLeft), height: Math.max(0, sidebarBottom - targetBottom) }} />
      <div className="absolute bg-black/40" style={{ left: sidebarLeft, top: targetTop, width: Math.max(0, targetLeft - sidebarLeft), height: Math.max(0, targetBottom - targetTop) }} />
      <div className="absolute bg-black/40" style={{ left: targetRight, top: targetTop, width: Math.max(0, sidebarRight - targetRight), height: Math.max(0, targetBottom - targetTop) }} />

      <div
        className="pointer-events-none absolute rounded-md border-2 border-violet-300/90"
        style={{
          left: layout.targetRect.left,
          top: layout.targetRect.top,
          width: layout.targetRect.width,
          height: layout.targetRect.height,
        }}
      />

      <div
        className="absolute rounded-xl border border-violet-200 bg-violet-100 px-4 py-3 text-center shadow-xl"
        style={{ left: layout.bubble.left, top: layout.bubble.top, width: layout.bubble.width }}
      >
        <span
          className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border-violet-200 bg-violet-100 ${
            layout.placement === 'right' ? '-left-2 border-b border-l' : '-right-2 border-r border-t'
          }`}
        />
        <p className="mb-2 text-sm leading-snug text-slate-700">{current.body}</p>
        <div className="flex items-center justify-between gap-2">
          <button onClick={handleProceed} className="rounded-md bg-slate-800 px-4 py-1 text-sm font-semibold text-white transition-colors hover:bg-slate-900">
            {step < TUTORIAL_STEPS.length - 1 ? 'Proceed' : 'Finish'}
          </button>
          <span className="text-sm text-slate-500">{progressLabel}</span>
        </div>
      </div>
    </div>
  );
}

