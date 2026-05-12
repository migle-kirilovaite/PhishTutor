import { useEffect, useRef, useState } from 'react';
import { LEVEL_SEQUENCE, PASS_THRESHOLD, getLevelContent, getNextLevelId } from './data/phishingGame.js';
import { getConceptGroup } from './data/conceptGroups.js';
import { conceptGroupLabels } from './data/conceptGroupLabels.js';
import Sidebar from './components/Sidebar.jsx';
import Tutorial from './components/Tutorial.jsx';
import InfoModal from './components/InfoModal.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExplanationsPage from './pages/ExplanationsPage.jsx';
import PracticePage from './pages/PracticePage.jsx';
import FeedbackPage from './pages/FeedbackPage.jsx';
import CompletionPage from './pages/CompletionPage.jsx';
const createEmptyPracticeResultsByLevel = () => Object.fromEntries(LEVEL_SEQUENCE.map((levelId) => [levelId, []]));
const getPracticeScore = (result) => {
  const total = result?.totalDecisions ?? 0;
  return total > 0 ? Math.round(((result?.correctCount ?? 0) / total) * 100) : 0;
};
const getLevelScore = (practiceResults) => {
  const scoredResults = (practiceResults ?? []).filter(Boolean);
  if (scoredResults.length === 0) return 0;
  return Math.round(scoredResults.reduce((sum, result) => sum + (result.score ?? 0), 0) / scoredResults.length);
};
const normalizeConceptId = (value) => String(value ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');


const buildLevelFeedbackItems = (level, practiceResults) => {
  const staticItems = level?.feedback?.items ?? [];
  const wrongConceptGroups = new Map();
  const correctConceptGroups = new Map();

  (practiceResults ?? []).forEach((practiceResult) => {
    (practiceResult?.decisionFeedback ?? []).forEach((item) => {
      const conceptId = normalizeConceptId(item.conceptId ?? item.label ?? item.id);
      if (!conceptId) return;
      // Use the parent concept group instead of individual concept
      const groupId = getConceptGroup(conceptId);
      
      if (item.ok === false) {
        const current = wrongConceptGroups.get(groupId) ?? { conceptId: groupId, count: 0, firstItem: item, childConcepts: [] };
        current.count += 1;
        if (!current.childConcepts.includes(conceptId)) current.childConcepts.push(conceptId);
        if (!current.firstItem?.body && item.body) current.firstItem = item;
        wrongConceptGroups.set(groupId, current);
        return;
      }
      if (item.ok === true) {
        const current = correctConceptGroups.get(groupId) ?? { conceptId: groupId, count: 0, firstItem: item, childConcepts: [] };
        current.count += 1;
        if (!current.childConcepts.includes(conceptId)) current.childConcepts.push(conceptId);
        if (!current.firstItem?.body && item.body) current.firstItem = item;
        correctConceptGroups.set(groupId, current);
      }
    });
  });

  const buildItems = (groups, passed) => [...groups.values()].map(({ conceptId }) => {
    const groupInfo = conceptGroupLabels[conceptId];
    const label = groupInfo?.label ?? 'Review this concept';
    const body = groupInfo?.body ?? '';
    return {
      ok: passed,
      conceptId,
      label,
      body,
    };
  });

  // Build combined feedback: mistakes first, then correct items
  const allItems = [
    ...buildItems(wrongConceptGroups, false),
    ...buildItems(correctConceptGroups, true),
  ];
  
  // If we have dynamic feedback, use it; otherwise fall back to static items
  if (allItems.length > 0) return allItems;
  return staticItems;
};
export default function App() {
  const [page, setPage] = useState('welcome');
  const [showTut, setShowTut] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [activeLevelId, setActiveLevelId] = useState(1);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [completedPracticeResultsByLevel, setCompletedPracticeResultsByLevel] = useState(createEmptyPracticeResultsByLevel);
  const [completedLevelIds, setCompletedLevelIds] = useState([]);
  const [feedbackState, setFeedbackState] = useState(null);
  const previousLevelIdRef = useRef(activeLevelId);
  const activeLevel = getLevelContent(activeLevelId);
  const activePractice = activeLevel.practices[practiceIndex];
  const activeLevelPracticeResults = completedPracticeResultsByLevel[activeLevelId] ?? [];
  const completedPracticeCount = activeLevelPracticeResults.filter(Boolean).length;
  const isActiveLevelComplete = completedPracticeCount >= activeLevel.practices.length;
  const currentLevelProgress = Math.min(100, (activeLevelPracticeResults.filter(Boolean).length / activeLevel.practices.length) * 100);
  const totalProgress = Math.min(100, (completedLevelIds.length / LEVEL_SEQUENCE.length) * 100);
  const nextLevelId = getNextLevelId(activeLevelId);
  useEffect(() => {
    const previousLevelId = previousLevelIdRef.current;
    if (previousLevelId !== activeLevelId) {
      const previousLevel = getLevelContent(previousLevelId);
      const previousPracticeResults = completedPracticeResultsByLevel[previousLevelId] ?? [];
      const previousCompletedCount = previousPracticeResults.filter(Boolean).length;
      if (previousCompletedCount < previousLevel.practices.length) {
        setCompletedPracticeResultsByLevel((current) => ({
          ...current,
          [previousLevelId]: [],
        }));
      }
    }
    previousLevelIdRef.current = activeLevelId;
  }, [activeLevelId, completedPracticeResultsByLevel]);
  const resetActiveLevelIfIncomplete = () => {
    if (!isActiveLevelComplete) {
      setCompletedPracticeResultsByLevel((current) => ({
        ...current,
        [activeLevelId]: [],
      }));
    }
  };
  const handleSelectLevel = (levelId) => {
    resetActiveLevelIfIncomplete();
    setShowInfo(false);
    setFeedbackState(null);
    setActiveLevelId(levelId);
    setPracticeIndex(0);
    setPage('level');
  };
  const handleStartLevel = (levelId) => handleSelectLevel(levelId);
  const handleNavigate = (nextPage) => {
    if (nextPage !== 'level' && nextPage !== 'exercise' && nextPage !== 'feedback') {
      resetActiveLevelIfIncomplete();
      setPracticeIndex(0);
      setFeedbackState(null);
      setShowInfo(false);
    }
    setPage(nextPage);
  };
  const handleBeginPractice = () => {
    setFeedbackState(null);
    setPage('exercise');
    setPracticeIndex(0);
  };
  const handlePracticeComplete = (result) => {
    const practiceScore = getPracticeScore(result);
    setFeedbackState({
      mode: 'practice',
      levelId: activeLevelId,
      practiceIndex,
      isLastPractice: practiceIndex === activeLevel.practices.length - 1,
      result: {
        ...result,
        score: practiceScore,
        passed: practiceScore >= PASS_THRESHOLD,
      },
    });
    setPage('feedback');
  };
  const handlePracticeFeedbackAction = () => {
    const feedback = feedbackState?.mode === 'practice' ? feedbackState : null;
    if (!feedback) return;
    if (!feedback.result.passed) {
      setFeedbackState(null);
      setPage('exercise');
      return;
    }
    const nextPracticeResults = [...(completedPracticeResultsByLevel[activeLevelId] ?? [])];
    nextPracticeResults[practiceIndex] = feedback.result;
    setCompletedPracticeResultsByLevel((current) => ({
      ...current,
      [activeLevelId]: nextPracticeResults,
    }));
    if (!feedback.isLastPractice) {
      setFeedbackState(null);
      setPracticeIndex(practiceIndex + 1);
      setPage('exercise');
      return;
    }
    const levelScore = getLevelScore(nextPracticeResults);
    const levelPassed = levelScore >= PASS_THRESHOLD;
    if (levelPassed) {
      setCompletedLevelIds((current) => (current.includes(activeLevelId) ? current : [...current, activeLevelId]));
    }
    setFeedbackState({
      mode: 'level',
      levelId: activeLevelId,
      score: levelScore,
      passed: levelPassed,
      nextLevelId,
      title: `Level ${activeLevelId} feedback`,
      intro: levelPassed
        ? 'Great work — this level counts as completed.'
        : 'You need at least 50% correct decisions to count this level as complete. Replay the level to improve your score.',
      items: buildLevelFeedbackItems(activeLevel, nextPracticeResults),
    });
    setPage('feedback');
  };
  const handleLevelFeedbackAction = () => {
    const feedback = feedbackState?.mode === 'level' ? feedbackState : null;
    if (!feedback) return;
    if (!feedback.passed) {
      setCompletedPracticeResultsByLevel((current) => ({
        ...current,
        [activeLevelId]: [],
      }));
      setPracticeIndex(0);
      setFeedbackState(null);
      setPage('level');
      return;
    }
    setFeedbackState(null);
    if (feedback.nextLevelId) {
      setActiveLevelId(feedback.nextLevelId);
      setPracticeIndex(0);
      setPage('level');
      return;
    }
    setPage('complete');
  };
  const handleRestartPrototype = () => {
    setShowTut(false);
    setShowInfo(false);
    setFeedbackState(null);
    setActiveLevelId(1);
    setPracticeIndex(0);
    setCompletedPracticeResultsByLevel(createEmptyPracticeResultsByLevel());
    setCompletedLevelIds([]);
    setPage('welcome');
  };
  const renderMain = () => {
    if (page === 'welcome') return <WelcomePage onStartLevel={handleStartLevel} onOpenTutorial={() => setShowTut(true)} />;
    if (page === 'about') return <AboutPage />;
    if (page === 'level') return <ExplanationsPage level={activeLevel} explanations={activeLevel.explanations} progress={currentLevelProgress} onNext={handleBeginPractice} />;
    if (page === 'feedback' && feedbackState?.mode === 'practice') {
      const feedbackProgress = Math.max(currentLevelProgress, Math.min(100, ((feedbackState.practiceIndex + 1) / activeLevel.practices.length) * 100));
      return (
        <FeedbackPage
          mode="practice"
          title={`Practice ${feedbackState.practiceIndex + 1} feedback`}
          intro={feedbackState.result.passed ? `You scored ${feedbackState.result.score}% — review the feedback below before moving on.` : `You scored ${feedbackState.result.score}% — replay this practice and try to reach at least 50% correct decisions.`}
          items={feedbackState.result.decisionFeedback ?? []}
          primaryActionLabel={feedbackState.result.passed ? (feedbackState.isLastPractice ? 'See level feedback' : 'Next practice') : 'Replay practice'}
          onPrimaryAction={handlePracticeFeedbackAction}
          progress={feedbackProgress}
          progressLabel={`Your level ${activeLevelId} progression:`}
        />
      );
    }
    if (page === 'feedback' && feedbackState?.mode === 'level') {
      return (
        <FeedbackPage
          mode="level"
          title={feedbackState.title}
          intro={feedbackState.intro}
          items={feedbackState.items}
          primaryActionLabel={feedbackState.passed ? (feedbackState.nextLevelId ? `Continue to Level ${feedbackState.nextLevelId}` : 'Back to levels') : 'Replay level'}
          onPrimaryAction={handleLevelFeedbackAction}
          progress={currentLevelProgress}
          progressLabel={`Your level ${activeLevelId} progression:`}
        />
      );
    }
    if (page === 'exercise') {
      return (
        <PracticePage
          key={`${activeLevelId}-${practiceIndex}`}
          level={activeLevel}
          email={activePractice}
          practiceIndex={practiceIndex}
          totalPractices={activeLevel.practices.length}
          onComplete={handlePracticeComplete}
          onShowInfo={() => setShowInfo(true)}
          progress={currentLevelProgress}
        />
      );
    }
    if (page === 'complete') return <CompletionPage onRestart={handleRestartPrototype} />;
    return null;
  };
  return (
    <div className="flex min-h-dvh flex-col bg-stone-50 font-sans lg:flex-row">
      <Sidebar activeLevelId={activeLevelId} progress={totalProgress} onSelectLevel={handleSelectLevel} onNavigate={handleNavigate} onTutorial={() => setShowTut(true)} />
      <main className="flex min-w-0 flex-1 flex-col overflow-y-scroll">{renderMain()}</main>
      {showTut && <Tutorial onClose={() => setShowTut(false)} />}
      {showInfo && <InfoModal level={activeLevel} explanations={activeLevel.explanations} onClose={() => setShowInfo(false)} />}
    </div>
  );
}
