export interface ITheme {
  name: string; // Theme name (e.g., "light", "dark")
  bodyColor: string; // Body background color
  backgroundColor: string; // Main page background color
  textColor: string; // Main text color
  altTextColor: string; // Alternate text color (e.g., for muted or secondary text)
  highlightColor: string; // Accent color for highlights, buttons, links, etc.
  borderColor: string; // Default border color for containers/cards
  borderRadius: string; // Border radius for rounded corners
  cardBackground: string; // Card/panel background color
  cardShadow: string; // Card/panel box-shadow
  navBackground: string; // Navigation bar background color
  navTextColor: string; // Navigation bar text color
  navLinkColor: string; // Navigation link color
  navLinkHoverColor: string; // Navigation link color on hover
  navLinkActiveColor: string; // Navigation link color when active
  navBorderColor: string; // Navigation bar border color
  headerBackground: string; // Header background color
  headerTextColor: string; // Header text color
  footerBackground: string; // Footer background color
  footerTextColor: string; // Footer text color
  buttonBackground: string; // Button background color
  buttonTextColor: string; // Button text color
  buttonHoverBackground: string; // Button background on hover
  buttonHoverTextColor: string; // Button text color on hover
  inputBackground: string; // Input field background color
  inputTextColor: string; // Input field text color
  inputBorderColor: string; // Input field border color
  linkColor: string; // Default link color
  linkHoverColor: string; // Link color on hover
  linkHoverBackground: string; // Link background on hover
  listBackground: string; // List background color
  listTextColor: string; // List text color
  tableBackground: string; // Table background color
  tableHeaderBackground: string; // Table header background color
  tableRowHoverBackground: string; // Table row hover background
  imageBorderColor: string; // Border color for images
  imageHighlightColor: string; // Highlight color for images/icons
  codeBackground: string; // Background for code/pre blocks
  codeTextColor: string; // Text color for code/pre blocks
  scrollbarColor: string; // Custom scrollbar color
  // Add more as needed for your UI!
}
