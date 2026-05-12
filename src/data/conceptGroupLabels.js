export const conceptGroupLabels = {
  // Level 1 groups
  'sender-identity': {
    label: 'Sender identity',
    body: 'Attackers may impersonate legitimate entities by using trusted display names, official-sounding sender names, or lookalike email domains. Always compare the visible sender name with the actual sender address and domain.',
  },

  'url-inspection': {
    label: 'URL and link inspection',
    body: 'Phishing links may use lookalike domains, trusted words in the URL path, or HTTPS to appear safe. HTTPS only encrypts the connection; it does not prove that the website belongs to the organization it imitates.',
  },

  'neutral-email-elements': {
    label: 'Normal email elements',
    body: 'Subjects, greetings, timestamps, reference numbers, footers, signatures, and automated-message wording are not suspicious by themselves. These elements can appear in legitimate emails and can also be copied by attackers.',
  },

    // Level 2 groups
  'generic-mass-message': {
    label: 'Generic mass-message wording',
    body: 'Mass phishing emails are often sent to many users at once, so they may use broad greetings or generic labels such as "Dear Customer", "Dear taxpayer", or "Hello". Generic wording is a clue, but it should be judged together with the request and context.',
  },

  'mass-phishing-scenario': {
    label: 'Familiar mass-phishing scenario',
    body: 'Mass phishing commonly uses familiar situations such as account warnings, refunds, parcel delivery issues, payment problems, or security checks. These scenarios are designed to feel relevant to many users at once.',
  },

  'emotional-pressure': {
    label: 'Emotional pressure',
    body: 'Phishing emails often use urgency, fear, rewards, small fees, or threats of loss to make users act quickly. This is social engineering: the message tries to influence emotion before the user carefully verifies it.',
  },

  'risky-request': {
    label: 'Risky request',
    body: 'Requests for passwords, account details, identity information, card numbers, payments, or urgent verification are high-risk. Sensitive requests should be verified through an official channel outside the email.',
  },

  // Level 3 groups
  'targeted-context': {
    label: 'Targeted workplace context',
    body: 'Spear phishing uses names, roles, meetings, projects, suppliers, shared folders, or internal tasks to make an email feel familiar. In this level, these details are treated as suspicious cues when they make an unexpected email appear personally relevant or trustworthy.',
  },

  'workplace-pressure': {
    label: 'Workplace pressure',
    body: 'Spear phishing may use normal workplace timing, meetings, reviews, syncs, or deadlines to make users open a file, use a link, or act quickly. The pressure may seem routine, but it can reduce careful verification.',
  },

  'workplace-portal-risk': {
    label: 'Fake workplace portal',
    body: 'Attackers may imitate workplace tools, document portals, access systems, shared folders, or review pages. A link that sounds work-related should still be checked by inspecting the actual domain and verifying through official systems.',
  },

  'attachment-risk': {
    label: 'Unexpected attachment',
    body: 'Unexpected files can be used to deliver malware, steal credentials, or make the user interact with unsafe content. Macro-enabled files such as .xlsm or .docm are especially risky when they were not expected.',
  },

  'normal-workplace-elements': {
    label: 'Normal workplace elements',
    body: 'Personalized greetings, meeting summaries, ticket references, policy explanations, review instructions, availability notes, and workplace sign-offs can be normal. They become risky when combined with suspicious sender information, targeted context, unexpected attachments, unusual links, or pressure to act.',
  },

  // Level 4 groups
  'authority-impersonation': {
    label: 'Authority impersonation',
    body: 'Whaling attacks often impersonate executives, executive offices, finance leaders, or senior stakeholders. Authority labels and job titles can be faked, so seniority should not replace verification.',
  },

  'authority-pressure': {
    label: 'Authority and urgency pressure',
    body: 'Whaling emails may use seniority, business deadlines, vague executive requests, or urgent tasks to pressure users into acting quickly. The request itself may be the strongest warning sign, even when the writing looks professional.',
  },

  'blocked-verification': {
    label: 'Secrecy or blocked verification',
    body: 'Attackers may claim they cannot take calls, are in a meeting, are unavailable, or need the matter kept confidential. These tactics isolate the user and prevent independent verification.',
  },

  'process-bypass-risk': {
    label: 'Process bypassing risk',
    body: 'Requests to skip normal approval workflows, manually process payments, change bank details, buy gift cards, send codes, or avoid official systems are major warning signs. Official procedures should be followed even if the request appears to come from leadership.',
  },

  'message-style': {
    label: 'Professional message style',
    body: 'Short, formal, and error-free messages can still be phishing. Advanced phishing often imitates normal business writing, so users should focus on identity, context, requested action, and process bypassing rather than spelling mistakes alone.',
  },

  'normal-executive-elements': {
    label: 'Normal executive or business elements',
    body: 'Client references, invoice numbers, board-report details, finance instructions, review notes, and executive sign-offs are not suspicious by themselves. They become risky when combined with authority pressure, secrecy, unusual links, payment changes, or process bypassing.',
  },
};

