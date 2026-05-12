import { LEVELS } from './metadata.js';

export const level1 = {
  id: 1,
  title: LEVELS[0].title,
  intro: {
    title: 'Level 1: Sender, Domain & Link Inspection',
    paragraphs: [
      'This level teaches you where to inspect an email before trusting it.',
      'Focus on display names, sender addresses, lookalike domains, HTTPS claims, and fake destinations.',
    ],
    buttonLabel: 'Start level 1 practice! →',
  },
  explanations: [
    {
      id: 'l1-e1',
      title: 'Sender identity can be impersonated',
      points: [
        'Phishing emails often impersonate legitimate entities by using trusted names, departments, or support teams.',
        'The visible display name is not a reliable proof of identity because attackers can freely set it to almost anything.',
        'A message may appear to come from a known company, but the actual sender address can reveal an unrelated or manipulated domain.',
        'This relates to suspicious sender information, especially display name and email address mismatches.',
        'In this level, inspect both the display name and the full sender email address before trusting the message.',
      ],
      tip: 'Do not trust the display name alone. Compare it with the actual sender address and domain.',
    },
    {
      id: 'l1-e2',
      title: 'Email domains can be made to look legitimate',
      points: [
        'Attackers manipulate communication channels by creating email addresses and domains that look legitimate at first glance.',
        'Common tricks include replacing letters with numbers, using similar-looking characters, adding extra words, or making small spelling changes.',
        'Examples include “paypa1.com”, “micros0ft.com”, “company-secure.com”, or “support-company.com”.',
        'These changes are designed to exploit quick reading, where the user recognizes the general shape of the domain but misses the exact spelling.',
        'One changed character or one added word can mean the message comes from a completely different domain controlled by an attacker.',
      ],
      tip: 'Read domains character by character. Lookalike domains are designed to trick users who skim.',
    },
    {
      id: 'l1-e3',
      title: 'Links can hide the real destination',
      points: [
        'Phishing attacks frequently use unusual or misleading links to redirect users to attacker-controlled websites.',
        'A link may contain a trusted company name somewhere in the URL, but the real destination is determined by the registered domain.',
        'For example, in “account-helpdesk-mail.com/microsoft/reset”, the domain is “account-helpdesk-mail.com”, not “microsoft.com”.',
        'Attackers may also use shortened URLs or button text to hide where a link actually leads.',
        'Before clicking, users should inspect the full URL and identify the actual domain.',
      ],
      tip: 'Trusted words inside a link do not prove the link is safe. Identify the actual registered domain.',
    },
    {
      id: 'l1-e4',
      title: 'HTTPS is not the same as trust',
      points: [
        'HTTPS means that the connection between the browser and the website is encrypted.',
        'However, HTTPS does not prove that the website belongs to the organization it claims to represent.',
        'Attackers can also obtain HTTPS certificates for fake or lookalike domains.',
        'For this reason, a lock icon or “https://” should not be treated as complete proof of legitimacy.',
        'Users should check both the HTTPS indicator and the domain name before trusting a link.',
      ],
      tip: 'HTTPS protects the connection, but it does not confirm that the website is legitimate.',
    },
  ],
  practices: [
    {
      id: 'l1-p1',
      subjectText: 'Password reset request received',
      subjectSuspicious: false,
      subjectConceptId: 'neutral-subject',
      subjectLabel: 'Neutral password reset subject',
      subjectExplanation:
          'The subject is not suspicious by itself. Password reset notifications can be legitimate. The task in this level is to inspect the sender identity and destination domain.',
      fromName: 'Microsoft Support',
      fromEmail: 'security-notice@account-helpdesk-mail.com',
      fromSuspicious: true,
      fromConceptId: 'display-name-email-mismatch',
      fromExplanation:
          'The display name says Microsoft, but the actual sender domain is unrelated. This is a display-name/email-address mismatch.',
      to: 'you@email.com',
      date: 'Thu, 15 May 2025 10:03 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'neutral-greeting',
          label: 'Neutral greeting',
          explanation:
              'The greeting is neutral. A simple greeting does not indicate phishing by itself.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'notice',
          text: 'We received a request to reset the password for your Microsoft account. ',
          suspicious: false,
          conceptId: 'neutral-account-context',
          label: 'Account reset context',
          explanation:
              'Password reset messages can be legitimate. The issue is whether the sender and link belong to the real service.',
        },
        {
          id: 'time',
          text: 'The request was recorded on 15 May 2025 at 10:01 UTC. ',
          suspicious: false,
          conceptId: 'neutral-time-reference',
          label: 'Time reference',
          explanation:
              'A timestamp can appear in legitimate account notifications. It is not suspicious by itself.',
        },
        {
          id: 'device',
          text: 'Request source: Chrome browser on Windows.',
          suspicious: false,
          conceptId: 'neutral-device-reference',
          label: 'Device reference',
          explanation:
              'Device or browser information can be included in real security notifications. This detail alone is not a phishing indicator.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'ignore',
          text: 'If you made this request, you can continue with the password reset process.',
          suspicious: false,
          conceptId: 'neutral-instruction',
          label: 'Neutral instruction',
          explanation:
              'This sentence is neutral. The important part is whether the reset link points to a legitimate Microsoft domain.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://account-helpdesk-mail.com/microsoft/reset',
          suspicious: true,
          conceptId: 'misleading-url',
          label: 'Unrelated reset domain',
          explanation:
              'The registered domain is "account-helpdesk-mail.com", not a Microsoft-owned domain. The word "microsoft" appears only later in the path.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'no-action',
          text: 'If you did not request a password reset, no changes will be made unless the reset process is completed. ',
          suspicious: false,
          conceptId: 'neutral-no-action',
          label: 'No-action note',
          explanation:
              'This sentence is not suspicious by itself. It gives general account information and does not reveal the sender’s legitimacy.',
        },
        {
          id: 'security-note',
          text: 'For your protection, password reset links may expire after a limited time. ',
          suspicious: false,
          conceptId: 'neutral-security-note',
          label: 'Security note',
          explanation:
              'Expiration notices are common in legitimate password reset emails. This is not enough to classify the message as phishing.',
        },
        {
          id: 'support',
          text: 'You can review your recent account activity from your account security settings.',
          suspicious: false,
          conceptId: 'neutral-support-reference',
          label: 'Support reference',
          explanation:
              'Referring to account security settings is not suspicious by itself. The suspicious clue is the unrelated sender and link domain.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Microsoft Account Team',
          suspicious: false,
          conceptId: 'copied-service-name-neutral',
          label: 'Copied service name',
          explanation:
              'The signature uses a trusted service name, but signatures are easy to copy. The sender domain matters more.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This is an automated account notification. Please do not reply to this message.',
          suspicious: false,
          conceptId: 'automated-footer-neutral',
          label: 'Automated footer',
          explanation:
              'Automated-message wording is common and easy to copy. It is not proof that the message is legitimate or malicious.',
        },
      ],
    },
    {
      id: 'l1-p2',
      subjectText: 'Account notification',
      subjectSuspicious: false,
      subjectConceptId: 'neutral-subject',
      subjectLabel: 'Neutral account subject',
      subjectExplanation:
          'The subject is generic but not the main indicator. The task is to notice the character substitution in the sender and link domain.',
      fromName: 'PayPal Resolution Center',
      fromEmail: 'service@paypa1-resolution.com',
      fromSuspicious: true,
      fromConceptId: 'character-substitution',
      fromExplanation:
          'The domain uses “paypa1” with the digit 1 instead of the letter l. This is a lookalike domain designed to be read quickly.',
      to: 'you@email.com',
      date: 'Fri, 16 May 2025 13:37 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'neutral-greeting',
          label: 'Neutral greeting',
          explanation:
              'The greeting is neutral. Focus on the sender address and link domain.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'message',
          text: 'A new account notification is available for review. ',
          suspicious: false,
          conceptId: 'neutral-account-context',
          label: 'Account notification context',
          explanation:
              'The wording is neutral. Account notifications can be legitimate. The suspicious evidence comes from the domain.',
        },
        {
          id: 'case-id',
          text: 'Reference number: PP-49281-75. ',
          suspicious: false,
          conceptId: 'neutral-reference-number',
          label: 'Reference number',
          explanation:
              'Reference numbers can appear in both legitimate and phishing emails. This is not suspicious by itself.',
        },
        {
          id: 'summary',
          text: 'This notification relates to a recent review of account preferences and notification settings.',
          suspicious: false,
          conceptId: 'neutral-notification-summary',
          label: 'Notification summary',
          explanation:
              'This is general account-related wording. It does not indicate phishing unless combined with suspicious identity or link clues.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'instruction',
          text: 'You may review the notification details from your account dashboard.',
          suspicious: false,
          conceptId: 'neutral-dashboard-instruction',
          label: 'Dashboard reference',
          explanation:
              'Mentioning an account dashboard is not suspicious by itself. The domain used for access is the key detail.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://paypa1-resolution.com/notification',
          suspicious: true,
          conceptId: 'character-substitution-url',
          label: 'Character-substitution URL',
          explanation:
              'The domain uses “paypa1” instead of “paypal”. One changed character means the site can be controlled by someone else.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'availability',
          text: 'The notification will remain available in the message center after review. ',
          suspicious: false,
          conceptId: 'neutral-availability',
          label: 'Availability note',
          explanation:
              'This sentence is neutral. It does not create unusual pressure or reveal anything suspicious about the sender.',
        },
        {
          id: 'help',
          text: 'If you have questions about account notifications, you can check the help section in your account. ',
          suspicious: false,
          conceptId: 'neutral-help-reference',
          label: 'Help reference',
          explanation:
              'References to help sections are common in legitimate emails and are not suspicious by themselves.',
        },
        {
          id: 'preference',
          text: 'You are receiving this message because account notification emails are enabled for your profile.',
          suspicious: false,
          conceptId: 'neutral-preference-notice',
          label: 'Preference notice',
          explanation:
              'Email preference notices are common. This sentence does not indicate phishing by itself.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'PayPal Resolution Center',
          suspicious: false,
          conceptId: 'copied-service-name-neutral',
          label: 'Copied service name',
          explanation:
              'Official-sounding names can be copied. The domain is the important clue in this practice.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This message was sent to the email address associated with your account.',
          suspicious: false,
          conceptId: 'neutral-footer',
          label: 'Account footer note',
          explanation:
              'This footer is neutral. It does not prove legitimacy, but it is not the suspicious element in this email.',
        },
      ],
    },
    {
      id: 'l1-p3',
      subjectText: 'Secure document shared with you',
      subjectSuspicious: false,
      subjectConceptId: 'neutral-subject',
      subjectLabel: 'Neutral document subject',
      subjectExplanation:
          'The subject is not inherently suspicious. Document-sharing emails are common. The technical inspection task is to check the sender, HTTPS claim, and destination.',
      fromName: 'Cloud Documents',
      fromEmail: 'notifications@cloud-documents-secure.com',
      fromSuspicious: true,
      fromConceptId: 'legitimate-looking-email-address',
      fromExplanation:
          'The domain sounds like a document platform but is not a verified service domain. Attackers often combine words like “cloud”, “document”, and “secure”.',
      to: 'you@email.com',
      date: 'Mon, 19 May 2025 08:52 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'neutral-greeting',
          label: 'Neutral greeting',
          explanation:
              'The greeting is neutral and does not indicate phishing by itself.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'notice',
          text: 'A secure document has been shared with you. ',
          suspicious: false,
          conceptId: 'neutral-document-context',
          label: 'Document context',
          explanation:
              'Document-sharing notifications are common. The source and destination still need to be inspected.',
        },
        {
          id: 'sender-note',
          text: 'The file was shared using an online document access portal. ',
          suspicious: false,
          conceptId: 'neutral-document-portal-reference',
          label: 'Portal reference',
          explanation:
              'This sentence describes a common document-sharing workflow. It is not suspicious by itself.',
        },
        {
          id: 'file-name',
          text: 'Document name: Q2_Project_Notes.pdf. ',
          suspicious: false,
          conceptId: 'neutral-file-name',
          label: 'File name',
          explanation:
              'A file name is not suspicious by itself. The important clues are the sender domain and link destination.',
        },
        {
          id: 'file-size',
          text: 'File size: 248 KB.',
          suspicious: false,
          conceptId: 'neutral-file-size',
          label: 'File size',
          explanation:
              'File size information is a normal detail in document notifications and is not suspicious by itself.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'https',
          text: 'This file is protected by encrypted HTTPS access.',
          suspicious: true,
          conceptId: 'fake-https-confidence',
          label: 'False HTTPS confidence',
          explanation:
              'HTTPS only encrypts the connection. A phishing website can also use HTTPS.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'access-info',
          text: 'You may be asked to sign in before viewing shared documents.',
          suspicious: false,
          conceptId: 'neutral-sign-in-context',
          label: 'Sign-in context',
          explanation:
              'Some legitimate document services require sign-in. This statement is not suspicious by itself, but the destination domain must still be checked.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://cloud-documents-secure.com/view/file',
          suspicious: true,
          conceptId: 'misleading-url',
          label: 'Fake document portal',
          explanation:
              'The domain is not a known document service. Secure-looking wording does not prove that the site is trustworthy.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'expiry',
          text: 'Shared document access may be limited according to the sender’s sharing settings. ',
          suspicious: false,
          conceptId: 'neutral-sharing-settings',
          label: 'Sharing settings note',
          explanation:
              'Access limits can exist in legitimate document-sharing services. This is not suspicious by itself.',
        },
        {
          id: 'reply-note',
          text: 'If you were not expecting this document, contact the sender through a separate communication channel.',
          suspicious: false,
          conceptId: 'neutral-safety-advice',
          label: 'Safety advice',
          explanation:
              'This is actually safe advice. It encourages verification through a separate channel and is not suspicious.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This message was generated automatically. Please do not reply.',
          suspicious: false,
          conceptId: 'automated-footer-neutral',
          label: 'Automated footer',
          explanation:
              'Automated-message wording is easy to copy and should not be treated as proof of legitimacy.',
        },
        { id: 'br7', text: '\n\n', suspicious: false },
        {
          id: 'legal',
          text: 'The contents of this message may contain information intended only for the recipient.',
          suspicious: false,
          conceptId: 'neutral-legal-footer',
          label: 'Legal footer',
          explanation:
              'Legal-style footers are common and easy to copy. This sentence is not the suspicious indicator in the email.',
        },
      ],
    },
  ],
  feedback: {
    title: 'Level 1 feedback',
    items: [
      {
        ok: true,
        conceptId: 'display-name-email-mismatch',
        label: 'Display name mismatch',
        body: 'The visible sender name can say anything. Always compare it with the actual email address.',
      },
      {
        ok: true,
        conceptId: 'character-substitution',
        label: 'Character substitution',
        body: 'Lookalike domains may replace letters with numbers or similar-looking characters to trick quick readers.',
      },
      {
        ok: true,
        conceptId: 'fake-https-confidence',
        label: 'HTTPS false confidence',
        body: 'HTTPS means the connection is encrypted, but it does not prove that the website belongs to the organisation it imitates.',
      },
      {
        ok: false,
        conceptId: 'misleading-url',
        label: 'Misleading URLs',
        body: 'A link can contain trusted words while still pointing to an attacker-controlled domain.',
      },
    ],
  },
};

void level1;


