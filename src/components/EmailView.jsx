import HeaderField from './HeaderField.jsx';
import SuspiciousPart from './SuspiciousPart.jsx';

export default function EmailView({ email, marks, feedback, selectionLocked = false, onInspect, onContinue, practiceLabel }) {
  const bodyParts = Array.isArray(email?.bodyParts) ? email.bodyParts : [];
  const subjectText = email?.subjectText ?? '';
  const fromName = email?.fromName ?? '';
  const fromEmail = email?.fromEmail ?? '';
  const fromDate = email?.date ?? '';

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="relative z-30 border-b border-stone-100 bg-stone-100 shadow-sm">
        <div className="w-full max-w-8xl mx-auto flex justify-between text-stone-400 px-6 sm:px-8 lg:px-12 py-1">
          <div className="flex items-center gap-2 text-[0.68rem]">
            <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
            <span className="ml-3 h-3 w-px bg-stone-200" />
            <span className="text-stone-300">{'\u2190'}</span>
            <span className="text-stone-300">{'\u21BB'}</span>
            <span className="text-stone-300">{'\u22EE'}</span>
          </div>
          <div className="text-[0.68rem] text-stone-300">{practiceLabel ?? '1–50 of 2,619'}</div>
        </div>
      </div>

      <div className="border-b border-stone-200 pl-6 sm:pl-8 lg:pl-12 pr-5 py-4 sm:pr-6">
        <HeaderField
          variant="subject"
          value={subjectText}
          id="_subject"
          suspicious={Boolean(email?.subjectSuspicious)}
          suspicionLabel="Suspicious subject"
          explanation={email?.subjectExplanation ?? ''}
          markStatus={marks._subject}
          feedback={feedback}
            selectionLocked={selectionLocked}
          onInspect={onInspect}
          onContinue={onContinue}
        />

        <div className="mt-4">
          <HeaderField
            variant="sender"
            value={`${fromName} <${fromEmail}>`}
            secondary="to me"
            rightText={fromDate}
            id="_from"
            suspicious={Boolean(email?.fromSuspicious)}
            suspicionLabel="Fake sender domain"
            explanation={email?.fromExplanation ?? ''}
            markStatus={marks._from}
            feedback={feedback}
            selectionLocked={selectionLocked}
            onInspect={onInspect}
            onContinue={onContinue}
          />
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pl-6 sm:pl-8 lg:pl-12 pr-5 py-6 sm:pr-6">
        <div className="whitespace-pre-wrap font-sans text-[0.95rem] leading-7 text-stone-800">
          {bodyParts.length > 0 ? bodyParts.map((part) => {
            const text = typeof part?.text === 'string' ? part.text : '';
            return text.trim() ? (
                <SuspiciousPart key={part.id} part={part} markStatus={marks[part.id]} feedback={feedback} selectionLocked={selectionLocked} onInspect={onInspect} onContinue={onContinue} />
            ) : (
              <span key={part.id}>{text}</span>
            );
          }) : <div className="text-sm text-stone-400">Practice content is loading…</div>}
        </div>
      </div>
    </div>
  );
}

