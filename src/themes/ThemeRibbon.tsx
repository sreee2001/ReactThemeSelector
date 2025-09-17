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
          onClick={() => onSelect(theme)}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}
