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
      title: 'Phishing often starts with impersonation',
      points: [
        'A common characteristic of phishing attacks is impersonation of legitimate entities.',
        'Attackers may pretend to represent well-known companies, support teams, banks, postal services, or other trusted organizations.',
        'They do this by copying official-sounding names, departments, signatures, logos, or formal communication styles.',
        'However, names and signatures are easy to copy and should not be treated as proof that a message is legitimate.',
        'In this level, pay attention to whether the visible identity of the sender is supported by the actual sender email address and domain.',
      ],
      tip: 'A trusted-looking name is only a claim. Verify it by checking the actual sender address.',
    },
    {
      id: 'l1-e2',
      title: 'The display name and email address can disagree',
      points: [
        'One important phishing indicator is suspicious sender information.',
        'Attackers can set the visible display name to something trustworthy, such as “Microsoft Support” or “PayPal Resolution Center”.',
        'The actual sender email address may still come from an unrelated, generic, or attacker-controlled domain.',
        'This creates a mismatch between who the message claims to be from and where it actually comes from.',
        'Users should therefore inspect both the display name and the full email address before trusting a message.',
      ],
      tip: 'Do not inspect only the sender name. Always compare it with the full email address.',
    },
    {
      id: 'l1-e3',
      title: 'Lookalike domains are used to spoof communication channels',
      points: [
        'Phishing attacks often manipulate communication channels to make emails and websites appear legitimate.',
        'Attackers may create domains that visually resemble real ones by changing one character, adding extra words, or using similar-looking symbols.',
        'Examples include replacing a letter with a number, such as “paypa1” instead of “paypal”, or adding words such as “secure”, “support”, or “account”.',
        'These small changes are designed to exploit quick reading, where the user recognizes the general shape of the domain but misses the exact difference.',
        'A domain that only looks similar to a legitimate one is still a different domain and may be controlled by an attacker.',
      ],
      tip: 'Read domains carefully. One changed character or added word can completely change the destination.',
    },
    {
      id: 'l1-e4',
      title: 'HTTPS does not prove that a website is legitimate',
      points: [
        'Phishing websites may use HTTPS certificates to appear safer and more professional.',
        'HTTPS means that the connection between the browser and the website is encrypted.',
        'However, encryption does not prove that the website belongs to the organization it claims to represent.',
        'Attackers can also obtain HTTPS certificates for fake, unrelated, or lookalike domains.',
        'For this reason, users should treat HTTPS as only one technical detail and still inspect the domain carefully.',
      ],
      tip: 'HTTPS protects the connection, but it does not prove the identity of the website owner.',
    },
  ],
  practices: [
    {
      id: 'l1-p1',
      subjectText: 'Your delivery address needs confirmation',
      subjectSuspicious: false,
      subjectConceptId: 'neutral-delivery-subject',
      subjectLabel: 'Neutral delivery subject',
      subjectExplanation:
          'The subject is not suspicious by itself. Delivery notifications are common. The task is to inspect whether the sender and link actually belong to the delivery company.',
      fromName: 'DHL Parcel Support',
      fromEmail: 'tracking@dhl-parcel-confirm.com',
      fromSuspicious: true,
      fromConceptId: 'display-name-email-mismatch',
      fromExplanation:
          'The display name claims to be DHL, but the sender domain is “dhl-parcel-confirm.com”, not an official DHL domain. This is suspicious sender information.',
      to: 'you@email.com',
      date: 'Tue, 20 May 2025 09:14 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'neutral-greeting',
          label: 'Neutral greeting',
          explanation:
              'A simple greeting is not suspicious by itself. Sender identity and link destination are more important here.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'notice',
          text: 'A parcel linked to your email address is waiting for delivery address confirmation. ',
          suspicious: false,
          conceptId: 'neutral-delivery-context',
          label: 'Delivery context',
          explanation:
              'Delivery updates can be legitimate. This statement alone does not prove that the email is phishing.',
        },
        {
          id: 'tracking',
          text: 'Tracking reference: DH-584920-LT. ',
          suspicious: false,
          conceptId: 'neutral-tracking-reference',
          label: 'Tracking reference',
          explanation:
              'Tracking references can appear in both legitimate and phishing messages. They should not be treated as proof of legitimacy.',
        },
        { id: 'br2', text: '\n', suspicious: false },
        {
          id: 'sender-claim',
          text: 'This notification was sent by DHL Parcel Support.',
          suspicious: false,
          conceptId: 'copied-service-name-neutral',
          label: 'Copied company name',
          explanation:
              'A company name in the body can be copied easily. The actual sender domain must still be checked.',
        },
        { id: 'br2', text: '\n', suspicious: false },
        {
          id: 'instruction',
          text: 'Please confirm the delivery address using the secure parcel page below.',
          suspicious: false,
          conceptId: 'neutral-delivery-instruction',
          label: 'Delivery instruction',
          explanation:
              'Requesting delivery confirmation is not automatically suspicious. The destination link is the key indicator.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://dhl-parcel-confirm.com/address/confirm',
          suspicious: true,
          conceptId: 'misleading-url',
          label: 'Unofficial delivery domain',
          explanation:
              'The registered domain is “dhl-parcel-confirm.com”. It includes the DHL name, but it is not the official DHL domain.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'https-note',
          text: 'The confirmation page uses encrypted HTTPS access for your safety.',
          suspicious: true,
          conceptId: 'fake-https-confidence',
          label: 'False HTTPS confidence',
          explanation:
              'HTTPS only means the connection is encrypted. A phishing website can also use HTTPS on an attacker-controlled domain.',
        },
        { id: 'br5', text: '\n', suspicious: false },
        {
          id: 'footer',
          text: 'This is an automated parcel notification. Please do not reply.',
          suspicious: false,
          conceptId: 'automated-footer-neutral',
          label: 'Automated footer',
          explanation:
              'Automated-message wording is common and easy to copy. It is not enough to prove legitimacy.',
        },
      ],
    },
    {
      id: 'l1-p2',
      subjectText: 'Invoice available for review',
      subjectSuspicious: false,
      subjectConceptId: 'neutral-invoice-subject',
      subjectLabel: 'Neutral invoice subject',
      subjectExplanation:
          'The subject is neutral. Invoice notifications are common in business communication. The suspicious clues are in the sender address and link domain.',
      fromName: 'Adobe Billing',
      fromEmail: 'billing@ad0be-invoices.com',
      fromSuspicious: true,
      fromConceptId: 'character-substitution',
      fromExplanation:
          'The sender domain uses “ad0be” with the number 0 instead of the letter o. This is a character-substitution technique.',
      to: 'you@email.com',
      date: 'Wed, 21 May 2025 15:22 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'neutral-greeting',
          label: 'Neutral greeting',
          explanation:
              'The greeting does not reveal whether the message is legitimate or malicious.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'invoice-notice',
          text: 'Your monthly invoice is now available for review. ',
          suspicious: false,
          conceptId: 'neutral-invoice-context',
          label: 'Invoice context',
          explanation:
              'Invoice availability notices can be legitimate. The sender and destination still need to be inspected.',
        },
        {
          id: 'invoice-number',
          text: 'Invoice number: INV-20491-77. ',
          suspicious: false,
          conceptId: 'neutral-reference-number',
          label: 'Invoice number',
          explanation:
              'Reference numbers can make a message look official, but they are easy to fabricate.',
        },
        {
          id: 'amount',
          text: 'Amount due: €18.99.',
          suspicious: false,
          conceptId: 'neutral-payment-detail',
          label: 'Payment detail',
          explanation:
              'A payment amount is not suspicious by itself. Attackers may include realistic details to make a message look normal.',
        },
        { id: 'br2', text: '\n', suspicious: false },
        {
          id: 'dashboard',
          text: 'You can view the invoice from your billing dashboard.',
          suspicious: false,
          conceptId: 'neutral-dashboard-reference',
          label: 'Dashboard reference',
          explanation:
              'Mentioning a dashboard is common. The suspicious indicator is whether the link actually leads to the real service.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://ad0be-invoices.com/billing/view',
          suspicious: true,
          conceptId: 'character-substitution-url',
          label: 'Character-substitution URL',
          explanation:
              'The domain uses “ad0be” instead of “adobe”. A single substituted character can indicate an attacker-controlled lookalike domain.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'preference',
          text: 'You are receiving this message because billing notifications are enabled for your account.',
          suspicious: false,
          conceptId: 'neutral-preference-notice',
          label: 'Preference notice',
          explanation:
              'Email preference notices are common in legitimate messages, but they can also be copied into phishing emails.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Adobe Billing Team',
          suspicious: false,
          conceptId: 'copied-service-name-neutral',
          label: 'Copied service name',
          explanation:
              'The signature uses a trusted company name, but signatures are not reliable evidence of legitimacy.',
        },
      ],
    },
    {
      id: 'l1-p3',
      subjectText: 'Shared folder invitation',
      subjectSuspicious: false,
      subjectConceptId: 'neutral-shared-folder-subject',
      subjectLabel: 'Neutral shared-folder subject',
      subjectExplanation:
          'The subject is not suspicious by itself. Shared-folder invitations are common. This practice focuses on identifying the real destination of the link.',
      fromName: 'OneDrive',
      fromEmail: 'share-notification@fileshare-alerts.net',
      fromSuspicious: true,
      fromConceptId: 'legitimate-looking-email-address',
      fromExplanation:
          'The display name says OneDrive, but the email comes from “fileshare-alerts.net”, an unrelated generic file-sharing domain.',
      to: 'you@email.com',
      date: 'Thu, 22 May 2025 11:06 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'neutral-greeting',
          label: 'Neutral greeting',
          explanation:
              'The greeting is neutral. It does not determine whether the message is legitimate.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'share-notice',
          text: 'A folder has been shared with you through an online file access service. ',
          suspicious: false,
          conceptId: 'neutral-file-sharing-context',
          label: 'File-sharing context',
          explanation:
              'File-sharing notifications are common. The message still needs to be checked for sender and link inconsistencies.',
        },
        {
          id: 'folder-name',
          text: 'Folder name: Project Materials. ',
          suspicious: false,
          conceptId: 'neutral-folder-name',
          label: 'Folder name',
          explanation:
              'A realistic folder name can appear in both legitimate and phishing messages.',
        },
        {
          id: 'permission',
          text: 'Permission: view only.',
          suspicious: false,
          conceptId: 'neutral-permission-detail',
          label: 'Permission detail',
          explanation:
              'Permission details are common in legitimate sharing messages and are not suspicious by themselves.',
        },
        { id: 'br2', text: '\n', suspicious: false },
        {
          id: 'button-text',
          text: 'Open folder:',
          suspicious: false,
          conceptId: 'neutral-button-label',
          label: 'Neutral button label',
          explanation:
              'Button text can say anything. The important part is the actual URL that the button or link points to.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://fileshare-alerts.net/onedrive/project-materials',
          suspicious: true,
          conceptId: 'misleading-url',
          label: 'Trusted word in URL path',
          explanation:
              'The word “onedrive” appears in the path, but the registered domain is “fileshare-alerts.net”. The registered domain determines the real destination.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'access',
          text: 'You may need to sign in to view files shared with your email address.',
          suspicious: false,
          conceptId: 'neutral-sign-in-context',
          label: 'Sign-in context',
          explanation:
              'Some legitimate file services require sign-in. However, sign-in requests become dangerous when the destination domain is unrelated.',
        },
        { id: 'br5', text: '\n', suspicious: false },
        {
          id: 'safety',
          text: 'If you were not expecting this folder, contact the sender using a separate communication channel.',
          suspicious: false,
          conceptId: 'neutral-safety-advice',
          label: 'Safe verification advice',
          explanation:
              'This is safe advice. Verifying unexpected files through another channel can help avoid phishing.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This message was generated automatically by the file access system.',
          suspicious: false,
          conceptId: 'automated-footer-neutral',
          label: 'Automated footer',
          explanation:
              'Automated-message wording is easy to copy and does not prove the message is legitimate.',
        },
      ],
    },
    {
      id: 'l1-p4',
      subjectText: 'Security message from IT',
      subjectSuspicious: false,
      subjectConceptId: 'neutral-it-subject',
      subjectLabel: 'Neutral IT subject',
      subjectExplanation:
          'The subject sounds ordinary for an organization. The suspicious clues are the generic sender domain and the hidden destination behind the shortened link.',
      fromName: 'Company IT Service Desk',
      fromEmail: 'it.service.desk@gmail.com',
      fromSuspicious: true,
      fromConceptId: 'generic-sender-address',
      fromExplanation:
          'An internal IT service desk would normally use an organizational email domain. A generic Gmail address is inconsistent with the claimed sender identity.',
      to: 'you@email.com',
      date: 'Fri, 23 May 2025 08:41 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello,',
          suspicious: false,
          conceptId: 'neutral-greeting',
          label: 'Neutral greeting',
          explanation:
              'The greeting is neutral and should not be used as the main basis for judgment.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'notice',
          text: 'We are updating several mailbox security settings this week. ',
          suspicious: false,
          conceptId: 'neutral-it-context',
          label: 'IT update context',
          explanation:
              'IT security updates can be legitimate. The sender address and link need closer inspection.',
        },
        {
          id: 'scope',
          text: 'This message applies to staff accounts that use email forwarding or mobile sign-in.',
          suspicious: false,
          conceptId: 'neutral-scope-detail',
          label: 'Scope detail',
          explanation:
              'Specific-sounding details can make a message look credible, but they do not prove legitimacy.',
        },
        { id: 'br2', text: '\n', suspicious: false },
        {
          id: 'instruction',
          text: 'Review your mailbox settings using the link below.',
          suspicious: false,
          conceptId: 'neutral-settings-instruction',
          label: 'Settings instruction',
          explanation:
              'Reviewing settings is not suspicious by itself. The suspicious issue is the link destination.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'shortlink',
          text: 'https://bit.ly/mailbox-settings-review',
          suspicious: true,
          conceptId: 'shortened-url',
          label: 'Shortened URL hides destination',
          explanation:
              'A shortened URL hides the real destination. This makes it difficult for the user to verify where the link leads before opening it.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'note',
          text: 'No password will be changed unless you confirm the settings yourself.',
          suspicious: false,
          conceptId: 'neutral-no-password-change',
          label: 'No-password-change note',
          explanation:
              'This sentence may sound reassuring, but reassurance alone does not prove that the sender or link is legitimate.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Company IT Service Desk',
          suspicious: false,
          conceptId: 'copied-service-name-neutral',
          label: 'Copied internal department name',
          explanation:
              'An internal department name can be copied. It should match the actual sender domain.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'footer',
          text: 'This message is intended for internal users only.',
          suspicious: false,
          conceptId: 'neutral-internal-footer',
          label: 'Internal footer',
          explanation:
              'Internal-style footer wording can be copied and is not reliable proof that the message came from the organization.',
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
        body: 'A message may use a trusted company name while the actual sender domain belongs to somewhere else.',
      },
      {
        ok: true,
        conceptId: 'character-substitution',
        label: 'Character substitution',
        body: 'Lookalike domains may replace letters with numbers or similar-looking characters, such as “ad0be” instead of “adobe”.',
      },
      {
        ok: true,
        conceptId: 'misleading-url',
        label: 'Misleading URL structure',
        body: 'A trusted company name inside the URL path does not prove ownership. The registered domain is the key part to inspect.',
      },
      {
        ok: true,
        conceptId: 'shortened-url',
        label: 'Shortened URL',
        body: 'Shortened links can hide the real destination, making it harder to verify whether the link is legitimate before opening it.',
      },
      {
        ok: false,
        conceptId: 'fake-https-confidence',
        label: 'HTTPS false confidence',
        body: 'HTTPS means the connection is encrypted, but it does not prove that the website belongs to the organization being impersonated.',
      },
    ],
  },
};

void level1;


