export default function LevelProgressBar({ progress, label = 'Your level progression:', subtitle, subtitleClassName, isPractice = false }) {
  const subtitleClass = subtitleClassName ?? 'mt-10 font-bold text-[clamp(1.8rem,3vw,2.6rem)]';
  const containerBgClass = isPractice ? 'bg-violet-50/95' : 'bg-stone-50/95';

  return (
    <div className={`fixed top-0 left-0 z-20 w-full border-b border-stone-200 ${containerBgClass} py-6 backdrop-blur-sm sm:px-20 lg:left-[clamp(20rem,26vw,24rem)] lg:w-[calc(100vw-clamp(20rem,26vw,24rem))]`}>
      <span className="text-sm font-medium text-stone-500">{label}</span>

      <div className="relative mt-3 ">
        <div className="w-full h-3 bg-violet-200 overflow-hidden">
          <div className="h-3 bg-violet-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>

        <div className="absolute top-full pointer-events-none" style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}>
          <div className="flex flex-col items-center mt-1">
            <svg className="h-4 w-4 text-stone-400 rotate-180" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-sm font-medium text-stone-600 mt-0.5">{Math.round(progress)}%</div>
          </div>
        </div>
      </div>

      {subtitle && <div className={subtitleClass}>{subtitle}</div>}
    </div>
  );
}

