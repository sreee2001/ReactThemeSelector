export type NavItem = {
  label: string;
  key: string;
  children?: NavItem[];
};

export const NavigationData: NavItem[] = [
  {
    label: "Inputs",
    key: "inputs",
    children: [
      { label: "TextInput", key: "TextInput" },
      { label: "PasswordInputTypePassword", key: "PasswordInputTypePassword" },
      { label: "PasswordInputTypeText", key: "PasswordInputTypeText" },
      { label: "Checkbox", key: "Checkbox" },
      { label: "RadioButtons", key: "RadioButtons" },
      { label: "ToggleSwitch", key: "ToggleSwitch" },
    ],
  },
  {
    label: "Buttons",
    key: "buttons",
    children: [
      { label: "ButtonIcon", key: "ButtonIcon" },
      { label: "ButtonPrimary", key: "ButtonPrimary" },
      { label: "ButtonSecondary", key: "ButtonSecondary" },
    ],
  },
  {
    label: "Selectors",
    key: "selectors",
    children: [
      { label: "DropdownSelect", key: "DropdownSelect" },
      { label: "DatePicker", key: "DatePicker" },
    ],
  },
  {
    label: "Display",
    key: "display",
    children: [
      { label: "Card", key: "Card" },
      { label: "Alert", key: "Alert" },
      { label: "Badge", key: "Badge" },
      { label: "Avatar", key: "Avatar" },
      { label: "ProgressBar", key: "ProgressBar" },
    ],
  },
  {
    label: "Layout",
    key: "layout",
    children: [
      { label: "Drawer", key: "Drawer" },
      { label: "Flexbox", key: "Flexbox" },
      { label: "Grid", key: "Grid" },
      { label: "Modal", key: "Modal" },
    ],
  },
  {
    label: "Navigation",
    key: "navigation",
    children: [
      { label: "Tabs", key: "Tabs" },
      { label: "Pagination", key: "Pagination" },
      { label: "Breadcrumbs", key: "Breadcrumbs" },
    ],
  },
  {
    label: "Miscellaneous",
    key: "miscellaneous",
    children: [
      { label: "Tooltip", key: "Tooltip" },
      { label: "Popover", key: "Popover" },
      { label: "Accordion", key: "Accordion" },
      { label: "Spinner", key: "Spinner" },
    ],
  },
  // Add more categories and components as needed
];
