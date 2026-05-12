export const LEVELS = [
  {
    id: 1,
    title: 'Sender, Domain & Link Inspection',
    desc: 'Check sender addresses, lookalike domains, HTTPS links, and hidden destinations',
    status: 'active',
  },
  {
    id: 2,
    title: 'Mass Phishing Tactics',
    desc: 'Recognise common phishing scenarios, pressure tactics, and risky requests',
    status: 'locked',
  },
  {
    id: 3,
    title: 'Spear Phishing',
    desc: 'Recognise personalised emails that exploit names, roles, and workplace context',
    status: 'locked',
  },
  {
    id: 4,
    title: 'Whaling & Authority Abuse',
    desc: 'Detect executive impersonation, secrecy, payment pressure, and process bypasses',
    status: 'locked',
  },
];

export const LEVEL_SEQUENCE = LEVELS.map((level) => level.id);

export const PASS_THRESHOLD = 50;

export const TUTORIAL_STEPS = [
  {
    target: 'levels',
    body: 'You can move freely between levels at any time. Each level becomes progressively harder and may include phishing indicators introduced in previous levels.',
  },
  {
    target: 'progress',
    body: 'Your progress updates as you complete practice emails. Later levels may combine concepts you have already learned.',
  },
  {
    target: 'replay',
    body: 'You can replay this tutorial any time using the "How to play?" button.',
  },
];

void LEVELS;
void PASS_THRESHOLD;
void TUTORIAL_STEPS;


