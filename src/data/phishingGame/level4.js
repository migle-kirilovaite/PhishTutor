import { LEVELS } from './metadata.js';

export const level4 = {
  id: 4,
  title: LEVELS[3].title,
  intro: {
    title: 'Level 4: Whaling & Authority Abuse',
    paragraphs: [
      'This level focuses on advanced targeted emails that impersonate executives or exploit authority.',
      'The warning signs are more subtle. Look for authority pressure, secrecy, unusual financial requests, and attempts to bypass normal procedures.',
    ],
    buttonLabel: 'Start level 4 practice! →',
  },
  explanations: [
    {
      id: 'l4-e1',
      title: 'Whaling is spear phishing aimed at high-value roles',
      points: [
        'Whaling is a subtype of spear phishing that targets high-ranking or high-value individuals, such as executives, finance employees, managers, or users with privileged access.',
        'Instead of relying on obvious errors, these emails often imitate normal business communication and may appear short, professional, and realistic.',
        'Attackers may impersonate a CEO, CFO, COO, director, board member, senior stakeholder, or executive office.',
        'The request often involves money, confidential documents, supplier payments, sensitive approvals, or access to restricted systems.',
        'Because whaling attacks exploit authority and workplace trust, the most important warning sign may be the requested action rather than the writing quality.',
      ],
      tip: 'In advanced phishing, professional writing does not prove legitimacy. Inspect the authority, context, and requested action.',
    },
    {
      id: 'l4-e2',
      title: 'Authority and trust can be manipulated',
      points: [
        'Attackers exploit the trust users place in authority figures and recognizable workplace roles.',
        'A message that appears to come from a senior person may make the recipient feel obligated to respond quickly.',
        'This relates to impersonation of legitimate entities and the use of fake identity, where attackers pretend to be a person with power or influence.',
        'Authority-based phishing may use a formal tone, executive signature, or office label to appear legitimate.',
        'Even when the sender appears senior, unusual requests should be verified through a separate trusted channel.',
      ],
      tip: 'Do not let job title or seniority replace verification. Authority is one of the things attackers try to imitate.',
    },
    {
      id: 'l4-e3',
      title: 'Secrecy and urgency increase pressure',
      points: [
        'Whaling emails often combine authority with urgency to make the recipient act before thinking.',
        'Attackers may claim to be in a meeting, travelling, unavailable, or unable to take calls.',
        'They may also ask the recipient to keep the matter confidential or avoid discussing it with others.',
        'This connects to social engineering: secrecy prevents verification, while urgency reduces careful decision-making.',
        'Authority, secrecy, and urgency together form one of the strongest warning combinations in executive impersonation attacks.',
      ],
      tip: 'Authority plus secrecy plus urgency should always be treated as a strong warning pattern.',
    },
    {
      id: 'l4-e4',
      title: 'Process bypassing is a major warning sign',
      points: [
        'Whaling attacks frequently ask users to skip normal business controls or approval workflows.',
        'Examples include changing supplier bank details, approving invoices manually, buying gift cards, using a new document portal, or avoiding the usual internal system.',
        'Legitimate organizations usually have defined processes for payments, access, approvals, and confidential documents.',
        'A request to bypass those workflows is suspicious even if the message appears to come from leadership.',
        'When money, credentials, or confidential data are involved, the safest action is to follow the official process and verify independently.',
      ],
      tip: 'If a request asks you to avoid the normal workflow, treat it as suspicious until verified through official channels.',
    },
  ],
  practices: [
    {
      id: 'l4-p1',
      subjectText: 'Need your help before my next meeting',
      subjectSuspicious: true,
      subjectConceptId: 'authority-urgency-request',
      subjectExplanation:
          'The subject is vague but uses executive-style pressure. Whaling emails are often short and rely on authority rather than technical tricks alone.',
      fromName: 'CEO - Jonathan Reed',
      fromEmail: 'jonathan.reed@executive-mail.co',
      fromSuspicious: true,
      fromConceptId: 'authority-impersonation',
      fromExplanation:
          'The display name impersonates the CEO, but the domain is not clearly the company domain. This combines sender inspection with executive impersonation.',
      to: 'you@email.com',
      date: 'Fri, 23 May 2025 08:17 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Are you available?',
          suspicious: false,
          conceptId: 'executive-short-message',
          label: 'Short executive-style opening',
          explanation:
              'Short executive-style messages can be legitimate. The risk appears when they escalate into urgent, secretive, or unusual requests.',
        },
        { id: 'br1', text: '\n', suspicious: false },
        {
          id: 'meeting',
          text: 'I am going into a meeting and cannot take calls. ',
          suspicious: true,
          conceptId: 'blocked-verification',
          label: 'Blocks direct verification',
          explanation:
              'The sender discourages direct verification by claiming they cannot talk. This keeps the victim inside the attacker-controlled email thread.',
        },
        {
          id: 'normalContext',
          text: 'This is connected to a client follow-up from this morning. ',
          suspicious: false,
          conceptId: 'normal-business-context',
          label: 'Business context',
          explanation:
              'Client follow-up context can be normal. The suspicious indicators are the authority pressure, blocked verification, and unusual request.',
        },
        { id: 'br1', text: '\n', suspicious: false },
        {
          id: 'availability',
          text: 'I only have a short window before the next discussion starts.',
          suspicious: true,
          conceptId: 'authority-urgency',
          label: 'Time pressure',
          explanation:
              'The sender creates time pressure by suggesting there is only a short window to act. This discourages careful verification.',
        },
        {
          id: 'request',
          text: ' I need you to purchase five €100 gift cards for a client matter.',
          suspicious: true,
          conceptId: 'authority-urgency-request',
          label: 'Unusual financial request',
          explanation:
              'Gift card requests are a common executive impersonation scam. The request is unusual and should be verified separately.',
        },
        { id: 'br3', text: '\n', suspicious: false },
        {
          id: 'urgency',
          text: 'Please handle this within the next 30 minutes. ',
          suspicious: true,
          conceptId: 'authority-urgency',
          label: 'Immediate deadline',
          explanation:
              'The short deadline increases pressure and discourages normal verification.',
        },
        {
          id: 'secrecy',
          text: 'Do not involve anyone else yet because this is for a private client arrangement.',
          suspicious: true,
          conceptId: 'secrecy-pressure',
          label: 'Secrecy pressure',
          explanation:
              'The sender asks the recipient not to involve others. Secrecy is used to prevent verification and isolate the victim.',
        },
        { id: 'br4', text: '\n', suspicious: false },
        {
          id: 'followup',
          text: 'Send me the codes once you have them.',
          suspicious: true,
          conceptId: 'financial-code-request',
          label: 'Gift card code request',
          explanation:
              'Asking for gift card codes is a major scam indicator. Once sent, the value can be stolen immediately.',
        },
        { id: 'br5', text: '\n', suspicious: false },
        {
          id: 'expense-note',
          text: 'You can file the expense later today after I confirm the client details. ',
          suspicious: false,
          conceptId: 'normal-expense-reference',
          label: 'Expense reference',
          explanation:
              'Expense reimbursement can be a normal workplace process. However, it does not make an unusual gift-card request legitimate.',
        },
        {
          id: 'closing',
          text: 'I appreciate you handling this quickly.',
          suspicious: false,
          conceptId: 'normal-executive-closing',
          label: 'Polite closing',
          explanation:
              'This sentence is polite and not suspicious by itself. The suspicious indicators are the authority pressure, secrecy, urgency, and financial request.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Jonathan',
          suspicious: false,
          conceptId: 'executive-signoff-neutral',
          label: 'Executive sign-off',
          explanation:
              'A simple executive-style sign-off is easy to imitate. The unusual request and blocked verification are stronger indicators.',
        },
      ],
    },
    {
      id: 'l4-p2',
      subjectText: 'Confidential: supplier payment update',
      subjectSuspicious: true,
      subjectConceptId: 'payment-process-bypass',
      subjectExplanation:
          'The subject combines confidentiality with a payment change. This is a high-risk pattern in whaling and business email compromise.',
      fromName: 'CFO Office',
      fromEmail: 'finance.office@company-payments.co',
      fromSuspicious: true,
      fromConceptId: 'authority-impersonation',
      fromExplanation:
          'The sender claims to represent the CFO office, but the domain is a payment-themed external domain rather than the company’s official domain.',
      to: 'you@email.com',
      date: 'Mon, 26 May 2025 09:49 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hi Daniel,',
          suspicious: false,
          conceptId: 'personalized-greeting-neutral',
          label: 'Personalized greeting',
          explanation:
              'The personalized greeting fits a workplace message. Personalization alone does not prove legitimacy.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'confidential',
          text: 'This is confidential and should not be discussed with the wider team yet. ',
          suspicious: true,
          conceptId: 'secrecy-pressure',
          label: 'Secrecy pressure',
          explanation:
              'Secrecy prevents the recipient from verifying the request with others. This is a common authority-abuse tactic.',
        },
        { id: 'br1', text: '\n', suspicious: false },
        {
          id: 'normalContext',
          text: 'The supplier contract was finalized last week and the invoice is now ready for settlement. ',
          suspicious: false,
          conceptId: 'normal-finance-context',
          label: 'Finance context',
          explanation:
              'This is normal finance context. The danger appears when the email asks for payment changes or bypasses normal controls.',
        },
        {
          id: 'invoice-reference',
          text: 'Invoice reference: INV-47219-Q3.',
          suspicious: false,
          conceptId: 'normal-invoice-reference',
          label: 'Invoice reference',
          explanation:
              'Invoice reference numbers can appear in legitimate and phishing emails. They are not suspicious by themselves.',
        },
        { id: 'br2', text: '\n', suspicious: false },
        {
          id: 'payment',
          text: 'The supplier has updated their bank details for today’s invoice settlement.',
          suspicious: true,
          conceptId: 'payment-process-bypass',
          label: 'Payment detail change',
          explanation:
              'Unexpected changes to payment details are high-risk and should always follow verified finance procedures.',
        },
        { id: 'br3', text: '\n', suspicious: false },
        {
          id: 'bypass',
          text: 'Please process this manually because the approval system has not been updated yet.',
          suspicious: true,
          conceptId: 'process-bypass-request',
          label: 'Manual process bypass',
          explanation:
              'The sender asks the recipient to bypass the normal approval system. This is one of the strongest warning signs in business phishing.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'attachment',
          text: 'Attachment: Updated_Bank_Details.pdf',
          suspicious: true,
          conceptId: 'unexpected-sensitive-attachment',
          label: 'Sensitive payment attachment',
          explanation:
              'A document containing payment changes should be verified through official finance channels before being opened or acted on.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'normalNote',
          text: 'Please keep the invoice reference number unchanged. ',
          suspicious: false,
          conceptId: 'normal-finance-instruction',
          label: 'Finance instruction',
          explanation:
              'This sounds like a normal finance instruction. It is not the main warning sign.',
        },
        {
          id: 'deadline',
          text: 'The settlement should be completed before the end of the business day.',
          suspicious: true,
          conceptId: 'authority-urgency',
          label: 'Payment deadline',
          explanation:
              'The deadline adds pressure to complete the payment quickly. In a payment-change context, this should be treated carefully.',
        },
        { id: 'br6', text: '\n', suspicious: false },
        {
          id: 'no-system-note',
          text: 'Do not wait for the portal update because it may delay the supplier onboarding.',
          suspicious: true,
          conceptId: 'process-bypass-request',
          label: 'Avoids official portal',
          explanation:
              'The email discourages the recipient from waiting for the official system. Avoiding normal workflows is a major warning sign.',
        },
        { id: 'br7', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'CFO Office',
          suspicious: false,
          conceptId: 'executive-office-signoff-neutral',
          label: 'Executive office sign-off',
          explanation:
              'Authority labels such as “CFO Office” can be faked. The payment change and process bypass are the key indicators.',
        },
      ],
    },
    {
      id: 'l4-p3',
      subjectText: 'Board report access before 16:00',
      subjectSuspicious: true,
      subjectConceptId: 'executive-document-trap',
      subjectExplanation:
          'The subject sounds like a high-level business task. Advanced phishing often hides behind realistic executive workflows.',
      fromName: 'Anna Keller, Chief Operations Officer',
      fromEmail: 'anna.keller@leadership-docs.com',
      fromSuspicious: true,
      fromConceptId: 'authority-impersonation',
      fromExplanation:
          'The sender impersonates a senior executive, but the domain is a generic document-related domain rather than an official company domain.',
      to: 'you@email.com',
      date: 'Tue, 27 May 2025 13:22 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Daniel,',
          suspicious: false,
          conceptId: 'personalized-greeting-neutral',
          label: 'Direct name greeting',
          explanation:
              'A direct name greeting increases realism but does not prove the message is legitimate.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'context',
          text: 'The board report needs one final review before 16:00. ',
          suspicious: true,
          conceptId: 'authority-and-urgency',
          label: 'Authority and deadline',
          explanation:
              'The message combines a senior business context with a deadline, creating pressure to act quickly.',
        },
        {
          id: 'normalDetail',
          text: 'I added the operations summary, staffing update, and risk notes from last week. ',
          suspicious: false,
          conceptId: 'normal-executive-document-detail',
          label: 'Executive document detail',
          explanation:
              'This sounds like normal executive document detail. The suspicious parts are the sender identity, portal, secrecy, and process bypass.',
        },
        { id: 'br1', text: '\n', suspicious: false },
        {
          id: 'board-context',
          text: 'The board packet will be circulated after the final review is complete.',
          suspicious: false,
          conceptId: 'normal-board-process',
          label: 'Board process detail',
          explanation:
              'Board-process wording can be normal in executive workflows. It is not suspicious without the unusual link or process bypass.',
        },
        { id: 'br2', text: '\n', suspicious: false },
        {
          id: 'portal',
          text: 'Use the secure review portal below. Do not upload this to the normal document system yet.',
          suspicious: true,
          conceptId: 'process-bypass-request',
          label: 'Avoids normal document system',
          explanation:
              'The sender instructs the recipient not to use the normal system. Avoiding established workflows is a major phishing indicator.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://leadership-docs.com/board-review',
          suspicious: true,
          conceptId: 'fake-executive-portal',
          label: 'Fake executive portal',
          explanation:
              'The link uses executive-sounding words, but it is not a verified internal domain. It may be a credential-harvesting portal.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'neutralInstruction',
          text: 'Please only check the highlighted sections. ',
          suspicious: false,
          conceptId: 'normal-review-instruction',
          label: 'Review instruction',
          explanation:
              'This is a normal review instruction. Not every instruction in a suspicious email is itself suspicious.',
        },
        {
          id: 'feedback-note',
          text: 'Add your comments in the portal so I can consolidate the final version.',
          suspicious: false,
          conceptId: 'normal-feedback-note',
          label: 'Feedback instruction',
          explanation:
              'Asking for comments can be normal. The suspicious part is the unfamiliar portal and instruction to avoid the normal system.',
        },
        { id: 'br5', text: '\n', suspicious: false },
        {
          id: 'secrecy',
          text: 'Keep this between us until the report is final.',
          suspicious: true,
          conceptId: 'secrecy-pressure',
          label: 'Confidentiality pressure',
          explanation:
              'Secrecy limits verification and makes the recipient more dependent on the attacker’s instructions.',
        },
        { id: 'br6', text: '\n', suspicious: false },
        {
          id: 'schedule',
          text: 'I will be unavailable for most of the afternoon, so please use the portal rather than messaging me. ',
          suspicious: true,
          conceptId: 'blocked-verification',
          label: 'Discourages verification',
          explanation:
              'The sender discourages direct contact and pushes the recipient toward the attacker-controlled portal.',
        },
        {
          id: 'closing',
          text: 'Thanks for turning this around quickly.',
          suspicious: false,
          conceptId: 'normal-executive-closing',
          label: 'Executive-style closing',
          explanation:
              'This closing sentence is not suspicious by itself. The warning signs are authority, urgency, secrecy, fake portal, and process bypass.',
        },
        { id: 'br7', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Anna',
          suspicious: false,
          conceptId: 'executive-signoff-neutral',
          label: 'Executive sign-off',
          explanation:
              'The casual sign-off makes the message feel internal, but the authority, secrecy, and process bypass remain suspicious.',
        },
      ],
    },
  ],
  feedback: {
    title: 'Level 4 feedback',
    items: [
      {
        ok: true,
        conceptId: 'authority-impersonation',
        label: 'Executive impersonation',
        body: 'Whaling attacks often impersonate senior figures, executive offices, or leadership roles to exploit trust and authority.',
      },
      {
        ok: true,
        conceptId: 'authority-urgency-request',
        label: 'Authority pressure',
        body: 'Whaling attacks may pressure users to act quickly because the request appears to come from someone senior.',
      },
      {
        ok: true,
        conceptId: 'secrecy-pressure',
        label: 'Secrecy pressure',
        body: 'Requests to keep something confidential can prevent users from verifying the message with others.',
      },
      {
        ok: true,
        conceptId: 'payment-process-bypass',
        label: 'Payment process risk',
        body: 'Unexpected payment changes, supplier bank detail updates, or manual approvals should always follow official verification procedures.',
      },
      {
        ok: true,
        conceptId: 'process-bypass-request',
        label: 'Bypassing normal procedure',
        body: 'The strongest sign of an advanced phishing email may be a request to avoid the normal system or approval workflow.',
      },
      {
        ok: true,
        conceptId: 'blocked-verification',
        label: 'Blocked verification',
        body: 'Attackers may claim they cannot take calls or are unavailable to keep the victim from verifying the request through another channel.',
      },
      {
        ok: false,
        conceptId: 'normal-executive-document-detail',
        label: 'Normal executive detail',
        body: 'Executive or business details are not automatically suspicious. They become risky when combined with unusual links, secrecy, process bypassing, or authority pressure.',
      },
    ],
  },
};

void level4;