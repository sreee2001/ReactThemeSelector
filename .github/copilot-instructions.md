# .github/copilot-instructions.md

## Project Overview

This is a React + TypeScript + Vite project that demonstrates advanced theme selection, modular UI showcase, and developer productivity workflows. The codebase uses styled-components for theming, ESLint (flat config) for linting, and a modular component structure under `/src`.

## Coding Agent Instructions

### General Conventions

- Use React 19+ and TypeScript 5.8+ for all new components.
- Place new UI components in `/src/components` and new themes in `/src/themes`.
- Use styled-components for dynamic theming and CSS modules for scoped styles.
- All theme logic should be managed via the custom `ThemeProvider` and context in `/src/themes/ThemeProvider.tsx`.
- UI showcase demos should be modularized: each demo in its own file under `/src/components` and imported into the showcase.
- Navigation/content split is implemented via `NavigationPanel.tsx` and `ContentPane.tsx`.

### Theming

- Theme selection is managed globally via context. Update the theme by calling the context setter, not by local state.
- The floating theme selector (`ThemeRibbon.tsx`) must update the theme via context, not local state.
- `ThemeProvider` should accept a `theme` prop and propagate changes to all children.

### Linting & TypeScript

- Use ESLint with recommendedTypeChecked or strictTypeChecked configs for all TypeScript files.
- Add new TypeScript files as `.tsx` for components and `.ts` for logic/utilities.
- Use type-safe props and avoid `any`.

### File Structure

- `/src/components`: UI components and demos
- `/src/themes`: Theme objects, ThemeProvider, theme context
- `/src/styles`: Global and modular CSS
- `/src/pages`: Page-level components

### AI Agent Workflow

- When refactoring, modularize large components into smaller files and update imports accordingly.
- When adding new demos, create a new file in `/src/components` and import it into the showcase.
- When updating theming, ensure changes propagate via context and ThemeProvider.
- When updating documentation, merge new instructions with existing conventions from README.md.

### ESLint Setup

- Use the flat config with recommendedTypeChecked or strictTypeChecked rules.
- For React-specific linting, consider `eslint-plugin-react-x` and `eslint-plugin-react-dom`.
- See README.md for example ESLint config.

### Troubleshooting

- If theme changes do not propagate, check ThemeProvider and context usage.
- For TypeScript errors, ensure all files have correct module declarations and type-safe props.
- For navigation/content issues, validate tree selection logic and dynamic rendering in `NavigationPanel.tsx` and `ContentPane.tsx`.

## References

- See `README.md` for Vite/React setup and ESLint configuration examples.
- See `/src/themes/ThemeProvider.tsx` for theming logic.
- See `/src/components` for UI showcase demos.

---

_Last updated: 2024-06_
