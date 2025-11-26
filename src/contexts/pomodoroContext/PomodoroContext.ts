import { createContext } from "react";
import type { PomodoroContextProps } from "./PomodoroContextProps";

export const PomodoroContext = createContext<PomodoroContextProps| null>(null)