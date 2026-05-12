export default function CompletionPage({ onRestart }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-6 font-serif text-[clamp(2rem,3vw,3rem)] leading-tight text-stone-900">
        You have completed the levels of this prototype
      </h1>

      <div className="mb-8 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
        <p className="text-[clamp(1rem,1.4vw,1.1rem)] leading-8 text-stone-700">
          Thank you for testing this prototype.
        </p>
        <p className="mt-3 text-[clamp(1rem,1.4vw,1.1rem)] leading-8 text-stone-700">
          You have reached the end of the available levels. If you want, you can restart and try again from Level 1.
        </p>
      </div>

      <button
        onClick={onRestart}
        className="w-fit rounded-xl bg-violet-600 px-6 py-3 text-[clamp(0.95rem,1.4vw,1.05rem)] font-medium text-white transition-colors hover:bg-violet-700"
      >
        Restart prototype
      </button>
    </div>
  );
}

