// Formspree Configuration
// Replace with your single Formspree form ID

export const FORMSPREE_CONFIG = {
  // Single form for all contact inquiries
  FORM_ID: 'xpwoqwwj',
} as const;

// Helper function to get form endpoint
export const getFormspreeEndpoint = () => {
  return `https://formspree.io/f/${FORMSPREE_CONFIG.FORM_ID}`;
};
