import LevelProgressBar from '../components/LevelProgressBar.jsx';
export default function ExplanationsPage({ level, explanations, progress, onNext }) {
  const intro = level?.intro ?? {};
  const introTitle = intro.title ?? `Level ${level?.id ?? ''}`.trim();
  const levelProgress = Math.max(0, Math.min(100, progress ?? 0));
  return (
    <div className="flex min-w-0 flex-1 flex-col pt-[clamp(10rem,14vw,11rem)]">
      <LevelProgressBar progress={levelProgress} label={`Level ${level?.id ?? 1} progression:`} subtitle={introTitle} />
      <div className="flex w-full max-w-6xl min-h-0 flex-1 flex-col px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative flex min-h-[32rem] flex-1 flex-col overflow-visible px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
          <div className="space-y-4 mb-8">
            {(intro.paragraphs ?? []).map((paragraph, i) => (
              <p key={i} className="text-[clamp(0.95rem,1.2vw,1rem)] leading-relaxed text-stone-600">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6 pr-4">
              {explanations.map((exp) => (
                <div key={exp.id} className="rounded-lg border border-violet-200 bg-violet-50 p-6">
                  <h2 className="mb-4 text-[clamp(1rem,1.5vw,1.125rem)] font-semibold text-stone-800">{exp.title}</h2>
                  <ul className="list-disc space-y-2 pl-5">
                    {exp.points.map((p, i) => <li key={i} className="text-[clamp(0.92rem,1.2vw,1rem)] leading-relaxed text-stone-700">{p}</li>)}
                  </ul>
                  {exp.tip && <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-[clamp(0.82rem,1.1vw,0.9rem)] leading-relaxed text-amber-800">💡 {exp.tip}</div>}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-stone-100 pt-6">
            <button onClick={onNext} className="rounded-md bg-slate-700 px-6 py-2 text-[clamp(0.92rem,1.3vw,1rem)] font-semibold text-white transition-colors hover:bg-slate-800">
              {intro.buttonLabel ?? 'I am ready to practice!'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
