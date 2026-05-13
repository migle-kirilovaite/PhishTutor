export const conceptGroups = {
  // Level 1: Sender, Domain & Link Inspection
  'display-name-email-mismatch': 'sender-identity',
  'character-substitution': 'sender-identity',
  'legitimate-looking-email-address': 'sender-identity',
  'generic-sender-address': 'sender-identity',

  'misleading-url': 'url-inspection',
  'character-substitution-url': 'url-inspection',
  'fake-https-confidence': 'url-inspection',
  'shortened-url': 'url-inspection',

  'neutral-delivery-subject': 'neutral-email-elements',
  'neutral-invoice-subject': 'neutral-email-elements',
  'neutral-shared-folder-subject': 'neutral-email-elements',
  'neutral-it-subject': 'neutral-email-elements',
  'neutral-greeting': 'neutral-email-elements',
  'neutral-delivery-context': 'neutral-email-elements',
  'neutral-tracking-reference': 'neutral-email-elements',
  'copied-service-name-neutral': 'neutral-email-elements',
  'neutral-delivery-instruction': 'neutral-email-elements',
  'automated-footer-neutral': 'neutral-email-elements',
  'neutral-invoice-context': 'neutral-email-elements',
  'neutral-reference-number': 'neutral-email-elements',
  'neutral-payment-detail': 'neutral-email-elements',
  'neutral-dashboard-reference': 'neutral-email-elements',
  'neutral-preference-notice': 'neutral-email-elements',
  'neutral-file-sharing-context': 'neutral-email-elements',
  'neutral-folder-name': 'neutral-email-elements',
  'neutral-permission-detail': 'neutral-email-elements',
  'neutral-button-label': 'neutral-email-elements',
  'neutral-sign-in-context': 'neutral-email-elements',
  'neutral-safety-advice': 'neutral-email-elements',
  'neutral-it-context': 'neutral-email-elements',
  'neutral-scope-detail': 'neutral-email-elements',
  'neutral-settings-instruction': 'neutral-email-elements',
  'neutral-no-password-change': 'neutral-email-elements',
  'neutral-internal-footer': 'neutral-email-elements',

  // Level 2: Mass Phishing Tactics
  'generic-greeting': 'generic-mass-message',
  'generic-greeting-neutral': 'generic-mass-message',

  'account-warning-context': 'mass-phishing-scenario',
  'neutral-refund-context': 'mass-phishing-scenario',
  'delivery-context': 'mass-phishing-scenario',
  'neutral-service-continuity': 'mass-phishing-scenario',
  'neutral-process-description': 'mass-phishing-scenario',
  'neutral-delivery-process': 'mass-phishing-scenario',

  'artificial-urgency': 'emotional-pressure',
  'reward-lure': 'emotional-pressure',
  'small-payment-lure': 'emotional-pressure',
  'threat-of-loss': 'emotional-pressure',

  'sensitive-data-request': 'risky-request',

  'neutral-review-note': 'neutral-email-elements',
  'neutral-notification-setting': 'neutral-email-elements',
  'neutral-processing-time': 'neutral-email-elements',
  'neutral-verification-advice': 'neutral-email-elements',
  'neutral-delivery-window': 'neutral-email-elements',
  'neutral-delivery-address-note': 'neutral-email-elements',
  'formal-style-neutral': 'neutral-email-elements',

  // Level 3: Spear Phishing
  'spear-personal-context': 'targeted-context',
  'role-based-targeting': 'targeted-context',
  'workplace-identity-impersonation': 'targeted-context',

  'workplace-context-pressure': 'workplace-pressure',

  'fake-workplace-portal': 'workplace-portal-risk',

  'unexpected-attachment': 'attachment-risk',

  'personalized-greeting-neutral': 'normal-workplace-elements',
  'normal-meeting-summary': 'normal-workplace-elements',
  'normal-document-review-request': 'normal-workplace-elements',
  'normal-availability-note': 'normal-workplace-elements',
  'normal-followup': 'normal-workplace-elements',
  'workplace-signoff-neutral': 'normal-workplace-elements',
  'normal-it-policy-context': 'normal-workplace-elements',
  'normal-review-scope': 'normal-workplace-elements',
  'normal-access-review-request': 'normal-workplace-elements',
  'normal-reassurance': 'normal-workplace-elements',
  'normal-review-timeline': 'normal-workplace-elements',
  'normal-it-contact-reference': 'normal-workplace-elements',
  'neutral-ticket-reference': 'normal-workplace-elements',
  'workplace-department-neutral': 'normal-workplace-elements',
  'normal-supplier-detail': 'normal-workplace-elements',
  'normal-workplace-request': 'normal-workplace-elements',
  'normal-meeting-note': 'normal-workplace-elements',

  // Level 4: Whaling & Authority Abuse
  'authority-impersonation': 'authority-impersonation',

  'authority-urgency-request': 'authority-pressure',
  'authority-urgency': 'authority-pressure',
  'authority-and-urgency': 'authority-pressure',
  'executive-document-trap': 'authority-pressure',

  'secrecy-pressure': 'blocked-verification',
  'blocked-verification': 'blocked-verification',

  'payment-process-bypass': 'process-bypass-risk',
  'process-bypass-request': 'process-bypass-risk',
  'financial-code-request': 'process-bypass-risk',

  'unexpected-sensitive-attachment': 'attachment-risk',

  'executive-short-message': 'message-style',

  'normal-business-context': 'normal-executive-elements',
  'normal-expense-reference': 'normal-executive-elements',
  'normal-executive-closing': 'normal-executive-elements',
  'executive-signoff-neutral': 'normal-executive-elements',
  'normal-finance-context': 'normal-executive-elements',
  'normal-invoice-reference': 'normal-executive-elements',
  'normal-finance-instruction': 'normal-executive-elements',
  'executive-office-signoff-neutral': 'normal-executive-elements',
  'normal-executive-document-detail': 'normal-executive-elements',
  'normal-board-process': 'normal-executive-elements',
  'normal-review-instruction': 'normal-executive-elements',
  'normal-feedback-note': 'normal-executive-elements',

  'fake-executive-portal': 'workplace-portal-risk',
};

export const getConceptGroup = (conceptId) => conceptGroups[conceptId] ?? conceptId;

