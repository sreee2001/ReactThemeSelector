import { UseTheme } from "./ThemeProvider";
import type { ITheme } from "./ITheme";

// Import all themes from the options folder
import { LightTheme } from "./options/LightTheme";
import { DarkTheme } from "./options/DarkTheme";
import { BlueTheme } from "./options/BlueTheme";
import { BrownTheme } from "./options/BrownTheme";
import { PurpleTheme } from "./options/PurpleTheme";
import { YellowGreenTheme } from "./options/YellowGreenTheme";
import { SlateTheme } from "./options/SlateTheme";
import { TealTheme } from "./options/TealTheme";
import { GreenTheme } from "./options/GreenTheme";
import { RedTheme } from "./options/RedTheme";
import { OrangeTheme } from "./options/OrangeTheme";
import { IndigoTheme } from "./options/IndigoTheme";
import { GrayTheme } from "./options/GrayTheme";
import { GoldTheme } from "./options/GoldTheme";
import { AquaTheme } from "./options/AquaTheme";
import { OliveTheme } from "./options/OliveTheme";
import { SteelTheme } from "./options/SteelTheme";

// Central theme registry
const themes: ITheme[] = [
  LightTheme,
  DarkTheme,
  BlueTheme,
  BrownTheme,
  PurpleTheme,
  YellowGreenTheme,
  SlateTheme,
  TealTheme,
  GreenTheme,
  RedTheme,
  OrangeTheme,
  IndigoTheme,
  GrayTheme,
  GoldTheme,
  AquaTheme,
  OliveTheme,
  SteelTheme,
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = UseTheme();

  return (
    <div style={{ margin: "1rem 0", textAlign: "right" }}>
      <label htmlFor="theme-select" style={{ marginRight: "0.5rem" }}>
        Theme:
      </label>
      <select
        id="theme-select"
        value={theme.name}
        onChange={(e) => {
          const selected = themes.find((t) => t.name === e.target.value);
          if (selected) setTheme(selected);
        }}
      >
        {themes.map((t) => (
          <option
            key={t.name}
            value={t.name}
            style={{
              fontWeight: t.name === theme.name ? "bold" : "normal",
            }}
          >
            {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
