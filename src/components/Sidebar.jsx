import { LEVELS } from '../data/phishingGame.js';
import BrandWordmark from './BrandWordmark.jsx';

export default function Sidebar({ activeLevelId, progress, onSelectLevel, onNavigate, onTutorial }) {
  const progressValue = Math.max(0, Math.min(100, Math.round(progress)));
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progressValue / 100) * circumference;

  return (
    <aside data-tutorial-target="sidebar" className="flex w-full shrink-0 flex-col border-b border-violet-400 bg-violet-100/70 lg:sticky lg:top-0 lg:h-dvh lg:w-[clamp(20rem,26vw,24rem)] lg:border-b-0 lg:border-r lg:overflow-y-auto">
      <div className="flex justify-center px-4 pt-10 pb-10">
        <button onClick={() => onNavigate('welcome')} className="flex w-[clamp(13rem,44vw,11rem)] items-center justify-center rounded-[0.2rem] bg-transparent px-4 py-3 text-[clamp(3rem,1.8vw,1.15rem)] font-bold text-stone-900 transition-colors">
          <BrandWordmark textClassName="font-bold text-stone-900" iconClassName="h-16 w-16 text-violet-700" />
        </button>
      </div>

      <div data-tutorial-target="levels" className="flex flex-1 flex-col">
        <div className="px-5 text-[clamp(0.95rem,1.8vw,1rem)] font-bold text-stone-800">Game levels:</div>

        <nav className="flex-1 overflow-y-auto pt-2">
          {LEVELS.map((lv) => {
            const isActive = lv.id === activeLevelId;
            return (
              <button
                key={lv.id}
                onClick={() => onSelectLevel(lv.id)}
                className={`w-full px-8 py-3 text-left text-[clamp(0.85rem,1.5vw,0.98rem)] transition-colors ${isActive ? 'bg-violet-200/90 text-violet-700' : 'text-slate-500 hover:bg-violet-200/70'}`}
              >
                Level {lv.id}: {lv.title}
              </button>
            );
          })}
        </nav>
      </div>

      <div data-tutorial-target="progress" className="sticky bottom-0 z-10 bg-violet-100/70 px-4 pb-3 pt-2">
        <h3 className="text-center text-[clamp(1rem,2vw,1.35rem)] font-bold leading-tight text-stone-900">Your total progression:</h3>
        <div className="mt-2 flex justify-center">
          <div className="relative h-[clamp(10rem,16vw,9rem)] w-[clamp(10rem,16vw,9rem)]">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle cx="60" cy="60" r={radius} fill="none" stroke="rgb(214 198 241)" strokeWidth="8" />
              <circle cx="60" cy="60" r={radius} fill="none" stroke="rgb(122 85 215)" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={progressOffset} className="transition-all duration-700" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[clamp(2.5rem,5vw,3rem)] font-bold leading-none text-stone-900">{progressValue}%</div>
          </div>
        </div>
      </div>

      <div data-tutorial-target="replay" className="border-t border-violet-400 px-4 py-4 space-y-4 text-[clamp(1rem,1.5vw,1rem)] text-slate-500">
        <button onClick={onTutorial} className="block w-full text-left transition-colors hover:text-violet-700">How to play?</button>
        <button onClick={() => onNavigate('about')} className="block w-full text-left transition-colors hover:text-violet-700">About</button>
      </div>
    </aside>
  );
}


