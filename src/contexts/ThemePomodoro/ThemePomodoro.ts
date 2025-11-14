import { createContext } from "react";
import type { ThemeColorProps } from "./themeColorProps";

export const ThemePomodoroContext = createContext<ThemeColorProps | null>(null)