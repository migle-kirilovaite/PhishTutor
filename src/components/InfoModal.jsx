export default function InfoModal({ level, explanations, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-6 pt-40 pr-70"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-2xl border-2 border-violet-300 bg-violet-100 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-stone-700">Review: Level {level?.id ?? ''} key concepts</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-2xl font-light text-stone-400 transition-colors hover:text-stone-600"
            aria-label="Close review"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto max-h-[60vh] pr-2">
          {explanations.map((ex) => (
            <div key={ex.id} className="mb-4 rounded-md border-0 bg-transparent p-0">
              <h3 className="mb-2 text-sm font-semibold leading-relaxed text-stone-700">{ex.title}</h3>
              <ul className="list-disc space-y-1.5 pl-4">
                {ex.points.map((p, i) => (
                  <li key={i} className="text-xs leading-relaxed text-stone-600">{p}</li>
                ))}
              </ul>
              {ex.tip && (
                <div className="mt-2 rounded-md border-0 bg-transparent px-0 py-2 text-xs text-stone-600">💡 {ex.tip}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

