import { type ITheme } from "./ITheme";

type ThemeRibbonProps = {
  themes: ITheme[];
  selectedTheme: ITheme;
  onSelect: (theme: ITheme) => void;
};

export default function ThemeRibbon({
  themes,
  selectedTheme,
  onSelect,
}: ThemeRibbonProps) {
  return (
    <div className="theme-ribbon">
      {themes.map((theme) => (
        <button
          key={theme.name}
          className={`theme-ribbon-btn${
            selectedTheme.name === theme.name ? " selected" : ""
          }`}
          style={{
            background: theme.backgroundColor || "#eee", // Use theme's background color or default to light gray
            color: theme.textColor || "#222", // Use theme's text color or default to black
            border: `2px solid ${theme.borderColor || "#ccc"}`, // Use theme's border or default to none
          }}
          onClick={() => onSelect(theme)}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}
