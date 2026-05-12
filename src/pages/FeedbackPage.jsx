import { Check, X } from 'lucide-react';
import LevelProgressBar from '../components/LevelProgressBar.jsx';

export default function FeedbackPage({ mode = 'practice', title, intro, items = [], primaryActionLabel = 'Continue', onPrimaryAction, progress = 0, progressLabel }) {
  const heading = title ?? (mode === 'level' ? 'Level feedback' : 'Practice feedback');
  const correctItems = items.filter((item) => item.ok);
  const mistakeItems = items.filter((item) => !item.ok);
  const progressValue = Math.max(0, Math.min(100, progress));

  const renderItem = (item, index, kind) => {
    const isCorrect = kind === 'correct';
    return (
      <div key={`${kind}-${item.conceptId ?? index}`} className="rounded-lg bg-violet-50 p-4">
        <div className="flex gap-4">
          <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
            {isCorrect ? <Check className="h-6 w-6 stroke-[3]" /> : <X className="h-6 w-6 stroke-[3]" />}
          </div>
          <div className="min-w-0 flex-1">
            <p className={`text-[clamp(0.95rem,1.2vw,1rem)] leading-relaxed text-stone-700`}>{item.label}</p>
            {item.body && <p className="mt-1 text-[clamp(0.84rem,1.1vw,0.92rem)] leading-relaxed text-stone-500">{item.body}</p>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-w-0 flex-1 flex-col pt-[clamp(10rem,14vw,11rem)]">
      <LevelProgressBar progress={progressValue} label={progressLabel ?? 'Your level progression:'} subtitle={heading} />

      <div className="flex w-full max-w-6xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8 lg:pl-12">
        <div className="flex min-h-[32rem] flex-1 flex-col px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">

          {intro && <p className="mb-6 max-w-3xl text-[clamp(0.95rem,1.25vw,1rem)] leading-relaxed text-stone-600">{intro}</p>}

          <div className="flex-1 space-y-4">
            {correctItems.map((item, index) => renderItem(item, index, 'correct'))}
            {mistakeItems.map((item, index) => renderItem(item, index, 'mistake'))}
          </div>

          <div className="mt-8 flex items-end justify-between gap-4 border-t border-stone-100 pt-6">
            <p className="max-w-2xl text-[clamp(0.82rem,1.05vw,0.92rem)] leading-relaxed text-stone-500">
              {mode === 'level'
                ? 'Your progression was recorded, however you scored only half the points and it is advised you repeat this level.'
                : 'Review the concepts above, then continue when you are ready.'}
            </p>
            <button onClick={onPrimaryAction} className="rounded-md bg-slate-700 px-4 py-2 text-[0.82rem] font-semibold text-white transition-colors hover:bg-slate-800">
              {primaryActionLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
