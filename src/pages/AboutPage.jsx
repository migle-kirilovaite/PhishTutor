import BrandWordmark from '../components/BrandWordmark.jsx';

export default function AboutPage() {
  const sections = [
    {
      title: "What you'll learn",
      description: "PhishTutor teaches you to identify phishing attacks through hands-on exercises. Each level focuses on a specific social engineering attack type.",
      tags: ["Email Phishing", "Spear Phishing", "Domain Spoofing", "Typosquatting", "Social Engineering", "Whaling"],
    },
    {
      title: "How it works",
      description: "Each level has explanation modules followed by interactive exercises. You read realistic phishing emails, flag suspicious elements, then get detailed feedback — whether you spotted it or not.",
    }
  ];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-14">
      <h1 className="mb-3 flex items-center gap-2 text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-tight text-stone-900">
        About
        <BrandWordmark className="mx-1 align-baseline" textClassName="font-bold text-stone-900" iconClassName="h-[1.5em] w-[1.5em] text-violet-700" />
      </h1>
      <p className="mb-10 text-[clamp(0.95rem,1.5vw,1.05rem)] text-stone-600">
        A cybersecurity awareness training platform
      </p>

      <div className="space-y-5">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-7"
          >
            <h2 className="mb-3 text-[clamp(1.05rem,1.8vw,1.25rem)] font-semibold text-stone-900">
              {section.title}
            </h2>
            <p className="mb-4 text-[clamp(0.95rem,1.3vw,1.05rem)] leading-relaxed text-stone-700">
              {section.description}
            </p>
            {section.tags && (
              <div className="flex flex-wrap gap-2 pt-2">
                {section.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-violet-50 px-3 py-1 text-[clamp(0.75rem,1vw,0.85rem)] font-medium text-violet-700 border border-violet-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

