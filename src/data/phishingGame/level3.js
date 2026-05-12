import { LEVELS } from './metadata.js';

export const level3 = {
  id: 3,
  title: LEVELS[2].title,
  intro: {
    title: 'Level 3: Spear Phishing',
    paragraphs: [
      'This level introduces targeted phishing emails that use personal or workplace context.',
      'The emails may mention your name, role, team, project, meeting, or internal systems. Your goal is to notice when familiar context is being used to manipulate trust.',
    ],
    buttonLabel: 'Start level 3 practice! →',
  },
  explanations: [
    {
      id: 'l3-e1',
      title: 'Spear phishing uses personal and workplace context',
      points: [
        'Spear phishing targets a specific person, team, role, or organization instead of sending the same generic message to everyone.',
        'Attackers may reference names, job titles, meetings, projects, suppliers, shared folders, or internal systems.',
        'These details make the email feel familiar and reduce suspicion because the message appears connected to the recipient’s real work.',
        'This relates to impersonation and social engineering: attackers exploit trust by making the request appear relevant to the user.',
        'A realistic workplace context does not prove that the sender is legitimate, but it can be a suspicious cue when it is used to make the user trust an unexpected email.',
      ],
      tip: 'Treat personal and workplace details as suspicious cues when they make an unexpected email feel familiar or trustworthy.',
    },
    {
      id: 'l3-e2',
      title: 'Attackers impersonate workplace identities',
      points: [
        'Spear phishing often impersonates coworkers, managers, departments, IT support, HR, procurement, or project teams.',
        'The message may use names, roles, formal workplace wording, and routine internal processes to appear legitimate.',
        'This connects to the use of fake identity and authority-based trust, where attackers rely on the recipient’s familiarity with a person or department.',
        'Role-based targeting can be convincing even when the email does not use the recipient’s exact name.',
        'Unexpected workplace requests should be verified through a separate trusted channel, especially when they involve files, links, credentials, or permissions.',
      ],
      tip: 'If a workplace request feels unusual, verify it through chat, phone, or the official internal system.',
    },
    {
      id: 'l3-e3',
      title: 'Specific details can be used to manipulate trust',
      points: [
        'Spear phishing emails often include realistic details such as meeting names, sprint priorities, supplier onboarding, quarterly reviews, or shared documents.',
        'These details may also appear in legitimate workplace emails, but in this level they are treated as suspicious cues because they show how the message is using familiarity to build trust.',
        'The risk becomes stronger when realistic context is combined with suspicious sender information, unexpected files, unusual links, or requests to use unfamiliar portals.',
        'This makes spear phishing harder to detect than mass phishing because the message may look like normal work.',
        'Users should learn to notice when workplace details are being used to make an email, attachment, link, or request feel safer than it really is.',
      ],
      tip: 'In this level, mark specific workplace details as suspicious cues when they make the email feel personally relevant or encourage you to trust the request.',
    },
    {
      id: 'l3-e4',
      title: 'Unexpected files and portals increase risk',
      points: [
        'Spear phishing often uses attachments, shared folders, or fake work portals to steal credentials or deliver malware.',
        'Documents can be disguised as meeting notes, reports, handover checklists, supplier files, or project updates.',
        'Macro-enabled files, such as .xlsm or .docm documents, are especially risky when unexpected because they can contain executable macro code.',
        'Fake workplace portals may imitate internal access systems, file-sharing tools, or permission review pages.',
        'Before opening unexpected files or signing in through unfamiliar links, users should verify the request using a separate trusted channel.',
      ],
      tip: 'Do not open unexpected attachments or sign in through unusual work links without verifying the request.',
    },
  ],
  practices: [
    {
      id: 'l3-p1',
      subjectText: 'Notes from yesterday’s project meeting',
      subjectSuspicious: true,
      subjectConceptId: 'spear-personal-context',
      subjectLabel: 'Project meeting subject',
      subjectExplanation:
          'The subject references a realistic workplace event. In spear phishing, this kind of context is a suspicious cue because it can make an unexpected email feel familiar and safe.',
      fromName: 'Marta Finance',
      fromEmail: 'marta.finance@team-documents.co',
      fromSuspicious: true,
      fromConceptId: 'display-name-email-mismatch',
      fromExplanation:
          'The sender appears to be a colleague, but the domain is an external document-related domain rather than the organization’s official domain. This combines sender inspection with spear-phishing context.',
      to: 'you@email.com',
      date: 'Tue, 20 May 2025 09:11 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hi Daniel,',
          suspicious: false,
          conceptId: 'personalized-greeting-neutral',
          label: 'Personalized greeting',
          explanation:
              'Using the recipient’s name is not automatically suspicious. In spear phishing, personalization can lower suspicion, but the greeting alone is not enough to identify phishing.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'meeting',
          text: 'I attached the notes from yesterday’s project meeting. ',
          suspicious: true,
          conceptId: 'spear-personal-context',
          label: 'Project meeting reference',
          explanation:
              'The email uses a plausible internal context to create familiarity. This does not prove phishing by itself, but in spear phishing such details are suspicious cues because they can be used to lower the user’s guard.',
        },
        {
          id: 'neutralDetail',
          text: 'I added the action items we discussed and cleaned up the section about next sprint priorities. ',
          suspicious: true,
          conceptId: 'spear-personal-context',
          label: 'Specific meeting detail',
          explanation:
              'The message includes specific work-related details to make the email feel more believable. In this level, this is treated as a suspicious spear-phishing cue because it supports the impersonation attempt.',
        },
        {
          id: 'attendees',
          text: 'The notes also include the decisions from the product and finance discussion.',
          suspicious: false,
          conceptId: 'normal-meeting-summary',
          label: 'Meeting summary detail',
          explanation:
              'A meeting summary can be common in workplace communication. The stronger warning signs are the suspicious sender domain, targeted meeting context, and unexpected attachment.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'attachment',
          text: 'Attachment: Project_Notes_May.xlsm',
          suspicious: true,
          conceptId: 'unexpected-attachment',
          label: 'Unexpected macro-enabled attachment',
          explanation:
              'The .xlsm extension can contain macros. Unexpected macro-enabled files are risky because they may deliver malware.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'normalProcess',
          text: 'If anything looks wrong, just add comments directly in the file. ',
          suspicious: false,
          conceptId: 'normal-document-review-request',
          label: 'Normal review instruction',
          explanation:
              'Asking for comments on a document is normal. The suspicious part is that the file is unexpected and came from a questionable sender domain.',
        },
        {
          id: 'request',
          text: 'Please check it before the afternoon sync.',
          suspicious: true,
          conceptId: 'workplace-context-pressure',
          label: 'Routine workplace pressure',
          explanation:
              'The request uses a normal workplace rhythm to make the attachment feel expected and safe. This creates light pressure to open it quickly.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'availability',
          text: 'I will be in meetings most of the morning but can update the notes later if needed. ',
          suspicious: false,
          conceptId: 'normal-availability-note',
          label: 'Availability note',
          explanation:
              'This is a normal workplace availability note. It should not be treated as suspicious without stronger indicators.',
        },
        {
          id: 'followup',
          text: 'The final version can be uploaded to the shared folder after review.',
          suspicious: false,
          conceptId: 'normal-followup',
          label: 'Normal follow-up',
          explanation:
              'This is a normal collaboration statement. The warning signs remain the sender domain, targeted meeting context, and unexpected attachment.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Thanks,\nMarta',
          suspicious: false,
          conceptId: 'workplace-signoff-neutral',
          label: 'Workplace sign-off',
          explanation:
              'A familiar sign-off can be copied. The sender address and attachment should still be checked.',
        },
      ],
    },
    {
      id: 'l3-p2',
      subjectText: 'Shared folder access update',
      subjectSuspicious: true,
      subjectConceptId: 'workplace-identity-impersonation',
      subjectLabel: 'Workplace access subject',
      subjectExplanation:
          'The subject imitates a normal workplace access message. Spear phishing commonly impersonates internal support or access-management processes.',
      fromName: 'IT Service Desk',
      fromEmail: 'helpdesk@company-access-support.com',
      fromSuspicious: true,
      fromConceptId: 'legitimate-looking-email-address',
      fromExplanation:
          'The sender sounds like an internal IT team, but the domain is external and generic. This uses sender-inspection skills inside a workplace scenario.',
      to: 'you@email.com',
      date: 'Wed, 21 May 2025 12:26 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hello Team Lead,',
          suspicious: true,
          conceptId: 'role-based-targeting',
          label: 'Role-based targeting',
          explanation:
              'The email targets a work role rather than a random user. Spear phishing often uses job titles or responsibilities to make the request feel relevant.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'access',
          text: 'Your shared project folder access has been updated after the latest permission review. ',
          suspicious: true,
          conceptId: 'workplace-identity-impersonation',
          label: 'Internal access process',
          explanation:
              'The email imitates an internal access-management process. This is a suspicious cue in spear phishing because attackers often imitate routine workplace systems to gain trust.',
        },
        {
          id: 'policy',
          text: 'This review is part of the quarterly cleanup of inactive shared folder permissions. ',
          suspicious: false,
          conceptId: 'normal-it-policy-context',
          label: 'IT policy context',
          explanation:
              'This sounds like a normal IT policy explanation. Attackers may include realistic administrative details, but this sentence alone is not the strongest suspicious indicator.',
        },
        {
          id: 'scope',
          text: 'Only folders connected to active projects are included in this review.',
          suspicious: false,
          conceptId: 'normal-review-scope',
          label: 'Review scope detail',
          explanation:
              'This is a normal administrative detail. It contributes realism but is not a phishing indicator by itself.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'instruction',
          text: 'Please review your current folder access and confirm that your permissions are still required.',
          suspicious: false,
          conceptId: 'normal-access-review-request',
          label: 'Access review request',
          explanation:
              'Permission reviews are normal in organizations. The suspicious issue is where the confirmation link leads.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'link',
          text: 'https://company-access-support.com/folder-update',
          suspicious: true,
          conceptId: 'fake-workplace-portal',
          label: 'Fake workplace portal',
          explanation:
              'The link looks like a workplace access system but uses an external domain. It may be designed to collect credentials.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'support',
          text: 'No files will be deleted during this review. ',
          suspicious: false,
          conceptId: 'normal-reassurance',
          label: 'Reassurance note',
          explanation:
              'This reassurance is neutral. Phishing emails can include calming statements to make the request feel routine.',
        },
        {
          id: 'deadline',
          text: 'If no confirmation is received, inactive permissions may be reviewed again next week.',
          suspicious: false,
          conceptId: 'normal-review-timeline',
          label: 'Review timeline',
          explanation:
              'This timeline is not strongly suspicious because it does not create immediate pressure. The fake portal is the main warning sign.',
        },
        { id: 'br5', text: '\n\n', suspicious: false },
        {
          id: 'contact',
          text: 'For general access questions, contact the service desk through the internal help portal. ',
          suspicious: false,
          conceptId: 'normal-it-contact-reference',
          label: 'IT contact reference',
          explanation:
              'This is a normal support reference. However, it does not make the external access link trustworthy.',
        },
        {
          id: 'ticket',
          text: 'Ticket reference: SD-88421.',
          suspicious: false,
          conceptId: 'neutral-ticket-reference',
          label: 'Ticket reference',
          explanation:
              'Ticket references can appear in legitimate and phishing emails. They are not suspicious by themselves.',
        },
        { id: 'br6', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'IT Service Desk',
          suspicious: false,
          conceptId: 'workplace-department-neutral',
          label: 'Department sign-off',
          explanation:
              'Department names can be impersonated. Verify unusual access messages through the official IT portal.',
        },
      ],
    },
    {
      id: 'l3-p3',
      subjectText: 'Updated onboarding document for the Q3 supplier',
      subjectSuspicious: true,
      subjectConceptId: 'spear-personal-context',
      subjectLabel: 'Supplier project subject',
      subjectExplanation:
          'The subject references a specific workplace context. In spear phishing, project and supplier references are suspicious cues because they can make the message feel personally relevant.',
      fromName: 'Olivia Martin, Procurement',
      fromEmail: 'olivia.martin@procurement-team.co',
      fromSuspicious: true,
      fromConceptId: 'display-name-email-mismatch',
      fromExplanation:
          'The sender uses a full name and department, but the domain is not clearly the organization’s official domain. Earlier sender-inspection skills still apply.',
      to: 'you@email.com',
      date: 'Thu, 22 May 2025 14:03 UTC',
      bodyParts: [
        {
          id: 'greeting',
          text: 'Hi Daniel,',
          suspicious: false,
          conceptId: 'personalized-greeting-neutral',
          label: 'Personalized greeting',
          explanation:
              'A personalized greeting is expected in workplace email, but attackers can learn names from public or compromised sources.',
        },
        { id: 'br1', text: '\n\n', suspicious: false },
        {
          id: 'context',
          text: 'I uploaded the onboarding document for the supplier we discussed for the Q3 rollout. ',
          suspicious: true,
          conceptId: 'spear-personal-context',
          label: 'Specific project reference',
          explanation:
              'The message references a specific project and supplier to make the request feel familiar. This is a suspicious cue in spear phishing because attackers may use researched or leaked workplace details to manipulate trust.',
        },
        {
          id: 'normalDetail',
          text: 'The document includes the contact list, expected delivery dates, and the first version of the handover checklist. ',
          suspicious: true,
          conceptId: 'spear-personal-context',
          label: 'Supplier onboarding detail',
          explanation:
              'The email includes detailed supplier and project information to appear more believable. In this level, this is suspicious because it shows how targeted details can be used to build trust.',
        },
        {
          id: 'supplier-note',
          text: 'I also added the supplier onboarding owner and the internal review column.',
          suspicious: false,
          conceptId: 'normal-supplier-detail',
          label: 'Supplier detail',
          explanation:
              'Supplier and review details are normal in procurement-related emails. The stronger warning signs are the suspicious sender domain, targeted context, and unexpected attachment.',
        },
        { id: 'br2', text: '\n\n', suspicious: false },
        {
          id: 'attachment',
          text: 'Attachment: Supplier_Onboarding_Q3.docm',
          suspicious: true,
          conceptId: 'unexpected-attachment',
          label: 'Unexpected document attachment',
          explanation:
              'The .docm extension can contain macros. Unexpected project files should be verified before opening.',
        },
        { id: 'br3', text: '\n\n', suspicious: false },
        {
          id: 'request',
          text: 'Please review the document when you have a moment. ',
          suspicious: false,
          conceptId: 'normal-workplace-request',
          label: 'Normal workplace request',
          explanation:
              'The request itself is calm and normal. The suspicious signs are the specific context, sender domain, and unexpected attachment.',
        },
        {
          id: 'followup',
          text: 'I can update the checklist after your comments. ',
          suspicious: false,
          conceptId: 'normal-followup',
          label: 'Normal follow-up',
          explanation:
              'This is a normal collaboration statement. It should not be marked suspicious unless combined with stronger indicators.',
        },
        {
          id: 'meeting-note',
          text: 'If needed, we can also bring this to the supplier readiness call next week.',
          suspicious: false,
          conceptId: 'normal-meeting-note',
          label: 'Meeting note',
          explanation:
              'Mentioning a future meeting can be normal workplace context. The risky element remains the unexpected macro-enabled attachment.',
        },
        { id: 'br4', text: '\n\n', suspicious: false },
        {
          id: 'sign',
          text: 'Thanks,\nOlivia',
          suspicious: false,
          conceptId: 'workplace-signoff-neutral',
          label: 'Workplace sign-off',
          explanation:
              'A realistic coworker-style sign-off is easy to imitate. Verify the sender and attachment before opening.',
        },
      ],
    },
  ],
  feedback: {
    title: 'Level 3 feedback',
    items: [
      {
        ok: true,
        conceptId: 'spear-personal-context',
        label: 'Personal and workplace context',
        body: 'Spear phishing becomes more convincing by referencing names, meetings, projects, suppliers, or business routines. These details are suspicious cues when they make an unexpected email feel familiar or trustworthy.',
      },
      {
        ok: true,
        conceptId: 'role-based-targeting',
        label: 'Role-based targeting',
        body: 'Attackers may target your role or responsibilities to make a workplace email feel more relevant.',
      },
      {
        ok: true,
        conceptId: 'workplace-identity-impersonation',
        label: 'Workplace identity impersonation',
        body: 'Spear phishing may imitate internal departments, IT support, access reviews, procurement processes, or shared-folder workflows to make the message appear routine.',
      },
      {
        ok: true,
        conceptId: 'workplace-context-pressure',
        label: 'Workplace pressure',
        body: 'Spear phishing may use ordinary workplace timing, such as meetings or syncs, to make users open files or links quickly.',
      },
      {
        ok: true,
        conceptId: 'unexpected-attachment',
        label: 'Unexpected attachments',
        body: 'Unexpected files, especially macro-enabled documents, can be used to deliver malware or lead to fake login pages.',
      },
      {
        ok: true,
        conceptId: 'fake-workplace-portal',
        label: 'Fake workplace portals',
        body: 'Attackers often imitate company tools, shared folders, or access portals to steal credentials.',
      },
      {
        ok: false,
        conceptId: 'normal-workplace-detail',
        label: 'Normal workplace details',
        body: 'Some workplace details, greetings, sign-offs, ticket references, and collaboration notes are not suspicious by themselves. They become risky when combined with suspicious sender information, unexpected attachments, unusual links, or pressure to act.',
      },
    ],
  },
};

void level3;