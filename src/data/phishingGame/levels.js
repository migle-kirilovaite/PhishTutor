import { LEVEL_SEQUENCE } from './metadata.js';
import { level1 } from './level1.js';
import { level2 } from './level2.js';
import { level3 } from './level3.js';
import { level4 } from './level4.js';

export const LEVEL_CONTENT = {
  1: level1,
  2: level2,
  3: level3,
  4: level4,
};

export const TOTAL_STEPS = LEVEL_SEQUENCE.reduce((sum, levelId) => sum + LEVEL_CONTENT[levelId].practices.length, 0);

export const getLevelContent = (levelId) => LEVEL_CONTENT[levelId] ?? LEVEL_CONTENT[1];

export const getNextLevelId = (levelId) => {
  const index = LEVEL_SEQUENCE.indexOf(levelId);
  return index >= 0 ? LEVEL_SEQUENCE[index + 1] ?? null : null;
};

