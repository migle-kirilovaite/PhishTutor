import BrandWordmark from '../components/BrandWordmark.jsx';

export default function WelcomePage({ onStartLevel, onOpenTutorial }) {
  const welcomeLines = [
    'This game teaches you how to recognise phishing attacks.',
    'Each level focuses on a different kind of suspicious detail.',
    'Read the explanation first, then try the interactive exercise.',
    'Use the sidebar to track your progress and revisit the tutorial any time.',
  ];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
      <h1 className="mt-10 mb-10 text-[clamp(2.4rem,3vw,4.25rem)] font-bold leading-tight text-stone-900">
        Welcome to <BrandWordmark className="mx-1 align-baseline" textClassName="font-bold text-stone-900" iconClassName="h-[1.5em] w-[1.5em] text-violet-700" />!
      </h1>

      <div className="mb-12 max-w-3xl space-y-3">
        {welcomeLines.map((line, i) => (
          <div key={i} className="flex items-start gap-3 rounded-2xl border border-violet-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-5 sm:py-4">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[11px] font-bold text-violet-700 sm:h-7 sm:w-7">{i + 1}</span>
            <p className="text-[clamp(1rem,1.8vw,1.15rem)] leading-7 text-stone-700">{line}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-5 text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-tight text-stone-900">Would you like to have a tutorial on how to use the side bar?</h2>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button onClick={onOpenTutorial} className="rounded-md bg-green-500 px-6 py-3 text-[clamp(1rem,1.6vw,1.15rem)] font-semibold text-white transition-colors hover:bg-green-600">Yes</button>
        <button onClick={() => onStartLevel(1)} className="rounded-md bg-slate-800 px-6 py-3 text-[clamp(1rem,1.6vw,1.15rem)] font-semibold text-white transition-colors hover:bg-slate-900">No, jump straight to Level 1</button>
      </div>
    </div>
  );
}

