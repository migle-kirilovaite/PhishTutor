import { useState } from 'react';
import LevelProgressBar from '../components/LevelProgressBar.jsx';
import EmailView from '../components/EmailView.jsx';
export default function PracticePage({ level, email, practiceIndex, totalPractices, onComplete, onShowInfo, progress }) {
  const [feedback, setFeedback] = useState(null);
  const [marks, setMarks] = useState({});
  const practiceNumber = practiceIndex + 1;
  const safeEmail = email ?? { subjectText: '', fromName: '', fromEmail: '', date: '', bodyParts: [], fromSuspicious: false, subjectSuspicious: false };
  const bodyParts = Array.isArray(safeEmail.bodyParts) ? safeEmail.bodyParts : [];
  const allSuspiciousIds = [
    ...(safeEmail.fromSuspicious ? ['_from'] : []),
    ...(safeEmail.subjectSuspicious ? ['_subject'] : []),
    ...bodyParts.filter((p) => p?.suspicious).map((p) => p.id),
  ];
  const foundCount = Object.values(marks).filter((status) => status === 'correct').length;
  const wrongCount = Object.values(marks).filter((status) => status === 'incorrect').length;
  const totalDecisions = Object.keys(marks).length;
  const practiceScore = totalDecisions > 0 ? Math.round((foundCount / totalDecisions) * 100) : 0;
  
  const nonSuspiciousCount =
    (safeEmail.subjectSuspicious === false ? 1 : 0) +
    (safeEmail.fromSuspicious === false ? 1 : 0) +
    bodyParts.filter((p) => p.suspicious === false).length;
  const maxMistakes = Math.min(2, nonSuspiciousCount);
  
  const tooManyMistakes = wrongCount > maxMistakes;
  const canSeeFeedback = foundCount === allSuspiciousIds.length && allSuspiciousIds.length > 0;
  const selectionLocked = canSeeFeedback;
  const getFeedbackCopy = (correct, itemLabel, explanation) => {
    if (correct) {
      return {
        title: 'Congratulations! You found a sign of a phished email.',
        body: explanation || (itemLabel ? `“${itemLabel}” is a suspicious indicator.` : 'That part is suspicious.'),
        tone: 'correct',
      };
    }
    return {
      title: 'This does not indicate a phished email.',
      body: explanation || 'Keep looking for misspellings, mismatched domains, urgent threats, or unusual requests.',
      tone: 'incorrect',
    };
  };
  const handleInspect = (item) => {
    if (selectionLocked || feedback || marks[item.id]) return;
    const correct = Boolean(item.suspicious);
    setMarks((prev) => ({ ...prev, [item.id]: correct ? 'correct' : 'incorrect' }));
    setFeedback({ id: item.id, ...getFeedbackCopy(correct, item.label ?? item.text ?? '', item.explanation ?? '') });
  };
  const hasDecision = (id) => Object.prototype.hasOwnProperty.call(marks, id);
  return (
    <div className="flex min-w-0 flex-1 flex-col pt-[clamp(10rem,14vw,11rem)]">
      <LevelProgressBar
        progress={progress}
        label={`Level ${level?.id ?? 1} progression:`}
        subtitle="Click the email parts to get instant feedback."
        isPractice={true}
      />
      <div className="flex w-full flex-1 flex-col p-0">
        <div className="relative flex min-h-[32rem] flex-1 flex-col overflow-visible w-full pt-4 lg:pt-6">
          <EmailView
            email={safeEmail}
            marks={marks}
            feedback={feedback}
              selectionLocked={selectionLocked}
            onInspect={handleInspect}
            onContinue={() => setFeedback(null)}
            practiceLabel={`${practiceNumber} of ${totalPractices}`}
          />
          <button
            onClick={onShowInfo}
            aria-label="Review concepts" className="absolute bottom-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-700 text-lg font-semibold text-white shadow-lg shadow-violet-300/50 transition-transform hover:scale-105 info-btn"
          >
            i
          </button>
          <div className="flex justify-between border-t border-stone-100 px-5 py-4 text-sm">
            <div className="flex flex-col gap-3">
              {tooManyMistakes && (
                <div className="text-[0.8rem] text-red-600 font-medium">
                  You've made {wrongCount} mistakes. Review the explanations and try again.
                </div>
              )}
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="text-[0.8rem] text-stone-500">
                <span>{foundCount} indicators out of {allSuspiciousIds.length} found.</span>
              </div>
              <button
                onClick={() => {
                if (!canSeeFeedback) return;
                const decisionFeedback = [];
                
                if (safeEmail.subjectSuspicious || hasDecision('_subject')) {
                  decisionFeedback.push({
                    conceptId: safeEmail.subjectConceptId ?? '_subject',
                    label: safeEmail.subjectLabel || safeEmail.subjectText || 'Subject',
                    ok: marks._subject === 'correct',
                    body: safeEmail.subjectExplanation || '',
                  });
                }
                
                if (safeEmail.fromSuspicious || hasDecision('_from')) {
                  decisionFeedback.push({
                    conceptId: safeEmail.fromConceptId ?? '_from',
                    label: `${safeEmail.fromName} <${safeEmail.fromEmail}>`,
                    ok: marks._from === 'correct',
                    body: safeEmail.fromExplanation || '',
                  });
                }
                
                bodyParts.forEach((part) => {
                  if (Boolean(part?.suspicious) || hasDecision(part.id)) {
                    if (!hasDecision(part.id) && !part.suspicious) return;
                    decisionFeedback.push({
                      conceptId: part.conceptId ?? part.id,
                      label: part.label || part.text?.substring(0, 50) || 'Item',
                      ok: marks[part.id] === 'correct',
                      body: part.explanation || '',
                    });
                  }
                });
                
                if (safeEmail.subjectSuspicious && !marks._subject) {
                  decisionFeedback.push({
                    conceptId: safeEmail.subjectConceptId ?? '_subject',
                    label: `Missed: ${safeEmail.subjectText || 'Subject'}`,
                    ok: false,
                    body: safeEmail.subjectExplanation || '',
                    isMissed: true,
                  });
                }
                
                if (safeEmail.fromSuspicious && !marks._from) {
                  decisionFeedback.push({
                    conceptId: safeEmail.fromConceptId ?? '_from',
                    label: `Missed: ${safeEmail.fromName} <${safeEmail.fromEmail}>`,
                    ok: false,
                    body: safeEmail.fromExplanation || '',
                    isMissed: true,
                  });
                }
                
                bodyParts.forEach((part) => {
                  if (part.suspicious && !marks[part.id]) {
                    decisionFeedback.push({
                      conceptId: part.conceptId ?? part.id,
                      label: `Missed: ${part.label || part.text?.substring(0, 50) || 'Item'}`,
                      ok: false,
                      body: part.explanation || '',
                      isMissed: true,
                    });
                  }
                });
                
                onComplete({ correctCount: foundCount, totalDecisions, score: practiceScore, passed: practiceScore >= 50, decisionFeedback });
              }}
              disabled={!canSeeFeedback}
              className="rounded-md px-6 py-2 text-[0.85rem] font-medium text-white transition-colors enabled:bg-green-600 enabled:hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-stone-300 disabled:hover:bg-stone-300 disabled:opacity-70"
            >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
