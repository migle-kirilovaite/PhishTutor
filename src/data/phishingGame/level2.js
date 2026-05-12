import { LEVELS } from './metadata.js';

export const level2 = {
  id: 2,
  title: LEVELS[1].title,
  intro: {
    title: 'Level 2: Mass Phishing Tactics',
    paragraphs: [
      'This level introduces common mass phishing emails that use familiar situations such as account suspension, refunds, and parcel delivery problems.',
      'Now that you know how to inspect sender and link details, focus on what the email is trying to make you do: panic, rush, claim money, pay a small fee, or reveal sensitive information.',
    ],
    buttonLabel: 'Start level 2 practice! →',
  },
  explanations: [
    {
      id: 'l2-e1',
      title: 'Mass phishing uses familiar generic scenarios',
      points: [
        'Mass phishing emails are sent to many recipients at once rather than being carefully written for one specific person.',
        'Attackers often choose situations that could apply to many users, such as account problems, refunds, delivery issues, security checks, or missed payments.',
        'These scenarios are designed to feel personally relevant even when the message is generic.',
        'This relates to deceptive phishing, where attackers impersonate legitimate services and use familiar contexts to make the email appear believable.',
        'In this level, focus not only on who sent the email, but also on whether the situation is generic and designed to make many people react.',
      ],
      tip: 'Ask: “Could this same email have been sent to thousands of people?”',
    },
    {
      id: 'l2-e2',
      title: 'Attackers use impersonation and official-looking language',
      points: [
        'Mass phishing emails often imitate banks, delivery companies, refund offices, account services, or other recognizable organizations.',
        'Attackers may use formal or corporate communication style to reduce suspicion.',
        'Official-sounding names, departments, and signatures can be copied and do not prove that the email is legitimate.',
        'This connects to impersonation of legitimate entities, especially the use of official titles and formal communication style.',
        'A professional tone should therefore be treated as a surface-level cue, not as proof of trust.',
      ],
      tip: 'Professional wording can make a phishing email look legitimate, but it does not make the request safe.',
    },
    {
      id: 'l2-e3',
      title: 'Emotional pressure is part of the attack',
      points: [
        'Phishing emails often try to influence the user’s emotions instead of giving them time to think.',
        'Common emotional tactics include fear, urgency, curiosity, excitement, or fear of losing access to something important.',
        'Messages may threaten account suspension, lost refunds, returned parcels, or other negative outcomes.',
        'This relates to social engineering, where attackers use emotion manipulation to make the user act quickly.',
        'The more strongly an email pushes you to act immediately, the more carefully it should be checked.',
      ],
      tip: 'Pause whenever an email tries to make you panic, rush, or feel that you will lose something immediately.',
    },
    {
      id: 'l2-e4',
      title: 'Risky requests are the main warning sign',
      points: [
        'The goal of many mass phishing emails is to make the user perform a risky action.',
        'Risky actions include entering passwords, confirming identity details, sharing card information, paying unexpected fees, or clicking suspicious links.',
        'Even a small payment request can be dangerous because it may lead to card theft or identity verification abuse.',
        'Unexpected requests for personal, financial, or account information should be treated as phishing indicators.',
        'If an email requests sensitive information, the safest response is to verify the request through an official channel outside the email.',
      ],
      tip: 'If an email asks for passwords, card details, identity information, or urgent account action, verify it outside the email.',
    },
  ],
  practices: [
    {
      id: 'l2-p1',
      subjectText: 'Urgent: your account will be suspended today',
      subjectSuspicious: true,
      subjectConceptId: 'artificial-urgency',
      subjectExplanation:
          'The subject creates urgency and fear. This connects to emotional manipulation because the message pressures the user to act immediately.',
      fromName: 'Account Services',
      fromEmail: 'notifications@account-service-center.com',
      fromSuspicious: true,
      fromConceptId: 'legitimate-looking-email-address',
      fromExplanation:
          'The sender uses a generic service-like domain. In mass phishing, attackers often use official-sounding sender names and domains to imitate legitimate organizations.',
      to: 'you@email.com',
      date: 'Mon, 12 May 2025 09:20 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Dear Customer,',
          suspicious: true,
          conceptId: 'generic-greeting',
          label: 'Generic greeting',
          explanation:
              'A generic greeting can indicate mass phishing because the same email may have been sent to many users rather than written for one specific account holder.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'intro',
          text: 'We detected unusual activity on your account. ',
          suspicious: false,
          conceptId: 'account-warning-context',
          label: 'Account warning context',
          explanation:
              'Account warnings can be legitimate. The suspicious part is the emotional pressure and risky request that follow.',
        },
        {
          id: 'time',
          text: 'The activity was recorded earlier today and requires review by the account holder.',
          suspicious: false,
          conceptId: 'neutral-time-reference',
          label: 'Time reference',
          explanation:
              'A time reference is not suspicious by itself. It becomes concerning when combined with urgent pressure or requests for sensitive data.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'pressure',
          text: 'Your account will be suspended in 2 hours unless you verify your identity.',
          suspicious: true,
          conceptId: 'artificial-urgency',
          label: 'Urgent threat',
          explanation:
              'A two-hour deadline creates pressure. This is a social engineering tactic designed to make the user act before properly checking the email.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'request',
          text: 'Please confirm your password and account details to prevent suspension.',
          suspicious: true,
          conceptId: 'sensitive-data-request',
          label: 'Sensitive data request',
          explanation:
              'The email asks for sensitive account information. Passwords and account details should not be confirmed through an email request.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'explanation',
          text: 'This verification is required to keep your account active and avoid interruption to your services. ',
          suspicious: false,
          conceptId: 'neutral-service-continuity',
          label: 'Service continuity note',
          explanation:
              'Service-continuity wording is not suspicious by itself. The warning signs are the urgent threat and the request for sensitive information.',
        },
        {
          id: 'support-note',
          text: 'If the review is completed successfully, no further action will be needed.',
          suspicious: false,
          conceptId: 'neutral-review-note',
          explanation:
              'This sentence is neutral. It does not add a new phishing indicator by itself.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://account-service-center.com/verify',
          suspicious: true,
          conceptId: 'misleading-url',
          label: 'Suspicious verification link',
          explanation:
              'The link uses account-service wording, but it does not prove that the website belongs to a real service. This combines Level 1 link inspection with Level 2 pressure tactics.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'reminder',
          text: 'You are receiving this message because security notifications are enabled for your profile. ',
          suspicious: false,
          conceptId: 'neutral-notification-setting',
          label: 'Notification setting note',
          explanation:
              'Notification-setting statements are common in real emails and can also be copied by attackers. This is not the suspicious part of the message.',
        },
        {
          id: 'contact',
          text: 'For account information, visit your account settings or contact customer support.',
          suspicious: false,
          conceptId: 'neutral-support-reference',
          label: 'Support reference',
          explanation:
              'This is a neutral support reference. The suspicious element remains the email’s request to confirm sensitive information through its own link.',
        },
        { id: 'br7', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Account Services',
          suspicious: false,
          conceptId: 'formal-style-neutral',
          explanation:
              'The sign-off is neutral. Official-sounding names can be copied and should not be treated as proof of legitimacy.',
        },
        { id: 'br8', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This message was generated automatically. Please do not reply.',
          suspicious: false,
          conceptId: 'automated-footer-neutral',
          explanation:
              'Automated-message wording is common and easy to copy. It is not proof that the email is legitimate or malicious.',
        },
      ],
    },
    {
      id: 'l2-p2',
      subjectText: 'You are eligible for a refund',
      subjectSuspicious: true,
      subjectConceptId: 'reward-lure',
      subjectExplanation:
          'The subject uses an unexpected financial benefit. Reward lures can create curiosity or excitement and make users overlook warning signs.',
      fromName: 'Refund Notification Office',
      fromEmail: 'refunds@claim-refund-office.com',
      fromSuspicious: true,
      fromConceptId: 'legitimate-looking-email-address',
      fromExplanation:
          'The sender uses an official-sounding name and domain. Mass phishing often imitates formal institutions to appear credible.',
      to: 'you@email.com',
      date: 'Tue, 13 May 2025 11:44 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Dear taxpayer,',
          suspicious: true,
          conceptId: 'generic-greeting',
          label: 'Generic greeting',
          explanation:
              'The greeting is generic. Mass phishing often uses broad labels because the same email is sent to many recipients.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'intro',
          text: 'Our records show that a refund review has been completed for your profile. ',
          suspicious: false,
          conceptId: 'neutral-refund-context',
          label: 'Refund context',
          explanation:
              'Refund-related messages can be legitimate. The suspicious parts are the unexpected reward, deadline, and request for sensitive data.',
        },
        {
          id: 'case-id',
          text: 'Reference number: RF-20491-88.',
          suspicious: false,
          conceptId: 'neutral-reference-number',
          label: 'Reference number',
          explanation:
              'Reference numbers can appear in both legitimate and phishing emails. They are not suspicious by themselves.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'refund',
          text: 'You have an unclaimed refund of €284.60.',
          suspicious: true,
          conceptId: 'reward-lure',
          label: 'Unexpected reward',
          explanation:
              'Unexpected money can be used as a reward lure. The goal is to make the user excited enough to continue without careful verification.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'deadline',
          text: 'The refund must be claimed before midnight or it will expire.',
          suspicious: true,
          conceptId: 'artificial-urgency',
          label: 'Artificial deadline',
          explanation:
              'The deadline creates pressure and discourages verification through official channels. This is an urgency-based social engineering tactic.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'process',
          text: 'The refund can be processed after your information is confirmed in the refund form.',
          suspicious: false,
          conceptId: 'neutral-process-description',
          label: 'Process description',
          explanation:
              'A process description is not suspicious by itself. The problem is what information the email asks the user to submit.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'request',
          text: 'To process the refund, confirm your full name, date of birth, address, and card number.',
          suspicious: true,
          conceptId: 'sensitive-data-request',
          label: 'Personal and payment data request',
          explanation:
              'The email asks for identity and card information. This is a high-risk request and should be verified outside the email.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://claim-refund-office.com/form',
          suspicious: true,
          conceptId: 'misleading-url',
          label: 'Suspicious refund link',
          explanation:
              'The link uses refund-related words, but the domain does not prove it belongs to a legitimate service.',
        },
        { id: 'br7', text: '\n\n', suspicious: false },
        {
          id: 'availability',
          text: 'After the form is submitted, the refund status may be reviewed within several business days. ',
          suspicious: false,
          conceptId: 'neutral-processing-time',
          label: 'Processing time note',
          explanation:
              'Processing-time information is not suspicious by itself. It can appear in legitimate emails and does not prove the message is phishing.',
        },
        {
          id: 'help',
          text: 'If you believe this message was sent in error, please check your official account records.',
          suspicious: false,
          conceptId: 'neutral-verification-advice',
          label: 'Verification advice',
          explanation:
              'This sentence is neutral and even suggests checking official records. The suspicious parts are the reward lure, deadline, and sensitive data request.',
        },
        { id: 'br8', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Refund Notification Office',
          suspicious: false,
          conceptId: 'formal-style-neutral',
          explanation:
              'The formal sign-off is neutral. Official-sounding names can be copied and should not be trusted without checking the sender and request.',
        },
        { id: 'br9', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This is an automated notification related to refund processing.',
          suspicious: false,
          conceptId: 'automated-footer-neutral',
          explanation:
              'Automated notification wording is common and easy to copy. It is not the main warning sign.',
        },
      ],
    },
    {
      id: 'l2-p3',
      subjectText: 'Delivery fee required before parcel release',
      subjectSuspicious: true,
      subjectConceptId: 'small-payment-lure',
      subjectExplanation:
          'The subject uses a small delivery fee. Small payments often feel harmless, which makes them useful in phishing.',
      fromName: 'Parcel Delivery Service',
      fromEmail: 'support@parcel-release-service.com',
      fromSuspicious: true,
      fromConceptId: 'legitimate-looking-email-address',
      fromExplanation:
          'The sender domain sounds related to parcel delivery, but this does not prove legitimacy. Mass phishing often uses delivery scenarios because many users are expecting parcels.',
      to: 'you@email.com',
      date: 'Wed, 14 May 2025 15:08 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'generic-greeting-neutral',
          label: 'Neutral greeting',
          explanation:
              'A simple greeting is not enough to identify phishing by itself. The suspicious parts are the fee request and pressure.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'held',
          text: 'Your parcel is currently held at our distribution centre. ',
          suspicious: false,
          conceptId: 'delivery-context',
          label: 'Delivery context',
          explanation:
              'Delivery messages can be legitimate. Phishing uses this scenario because many people receive or expect parcels.',
        },
        {
          id: 'tracking',
          text: 'Tracking reference: PRC-775391-LT.',
          suspicious: false,
          conceptId: 'neutral-tracking-reference',
          label: 'Tracking reference',
          explanation:
              'A tracking reference is not suspicious by itself. Attackers can also include realistic-looking reference numbers.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'reason',
          text: 'The parcel cannot be released until the outstanding handling fee is completed.',
          suspicious: false,
          conceptId: 'neutral-delivery-process',
          label: 'Delivery process note',
          explanation:
              'This sentence describes a delivery process. The suspicious clue is the unexpected payment request and pressure to act today.',
        },
        {
          id: 'fee',
          text: 'A fee of €1.99 is required to release your parcel.',
          suspicious: true,
          conceptId: 'small-payment-lure',
          label: 'Small payment lure',
          explanation:
              'A small fee can make the request feel low-risk. The real danger may be entering card details on a phishing page.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'return',
          text: 'If payment is not completed today, the parcel will be returned to sender.',
          suspicious: true,
          conceptId: 'threat-of-loss',
          label: 'Threat of loss',
          explanation:
              'The email threatens that the user will lose the parcel unless they act quickly. This is emotional pressure based on urgency and fear of loss.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'payment-info',
          text: 'The payment page will ask for card details to complete the release request.',
          suspicious: true,
          conceptId: 'sensitive-data-request',
          label: 'Payment data request',
          explanation:
              'The email asks the user to enter card details. Even when the amount is small, payment information is sensitive and should be verified through the official delivery service.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://parcel-release-service.com/pay-fee',
          suspicious: true,
          conceptId: 'misleading-url',
          label: 'Suspicious payment link',
          explanation:
              'The link uses parcel-related words, but unexpected payment requests should be verified through the official delivery service.',
        },
        { id: 'br7', text: '\n\n', suspicious: false },
        {
          id: 'delivery-window',
          text: 'Once payment is completed, delivery will be scheduled for the next available route. ',
          suspicious: false,
          conceptId: 'neutral-delivery-window',
          label: 'Delivery window note',
          explanation:
              'Delivery scheduling information is not suspicious by itself. The suspicious part is the unexpected fee and payment link.',
        },
        {
          id: 'address-note',
          text: 'Please make sure your delivery address is available for the courier.',
          suspicious: false,
          conceptId: 'neutral-delivery-address-note',
          label: 'Address note',
          explanation:
              'This is a normal delivery-related sentence. It is not the phishing indicator in this email.',
        },
        { id: 'br8', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Thank you,\nParcel Delivery Service',
          suspicious: false,
          conceptId: 'formal-style-neutral',
          label: 'Formal sign-off',
          explanation:
              'The customer-service style is neutral. The suspicious indicators are the small payment request, payment data request, and threat of loss.',
        },
        { id: 'br9', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This message was sent as a parcel delivery status notification.',
          suspicious: false,
          conceptId: 'neutral-footer',
          label: 'Delivery footer',
          explanation:
              'The footer is neutral. It does not prove that the message is legitimate or malicious.',
        },
      ],
    },
  ],
  feedback: {
    title: 'Level 2 feedback',
    items: [
      {
        ok: true,
        conceptId: 'generic-greeting',
        label: 'Generic greeting',
        body: 'Mass phishing emails are often sent to many users at once, so they may use broad greetings such as “Dear Customer” or “Dear taxpayer”.',
      },
      {
        ok: true,
        conceptId: 'artificial-urgency',
        label: 'Artificial urgency',
        body: 'Mass phishing emails often use short deadlines or account threats to make users act before thinking.',
      },
      {
        ok: true,
        conceptId: 'reward-lure',
        label: 'Reward lures',
        body: 'Unexpected refunds, prizes, or financial benefits can be used to make users reveal sensitive information.',
      },
      {
        ok: true,
        conceptId: 'small-payment-lure',
        label: 'Small payment lures',
        body: 'Small fees can feel harmless, but they may be used to steal card details or confirm that an email address is active.',
      },
      {
        ok: true,
        conceptId: 'sensitive-data-request',
        label: 'Sensitive data requests',
        body: 'Emails that ask for passwords, card details, identity details, or urgent account confirmation should be verified outside the email.',
      },
      {
        ok: false,
        conceptId: 'formal-style-neutral',
        label: 'Formal wording alone is not enough',
        body: 'Professional wording, formal signatures, and automated footers can be copied. They should not be treated as proof that an email is legitimate.',
      },
    ],
  },
};

void level2;