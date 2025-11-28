export interface ThemeInterface {
  pomodoro: string;
  shortBreak: string;
  longBreak: string;
}

export interface timeProgressBar {
  minutes: number,
  seconds: number
}

export interface ValueInput {
  valueIntervalInput: number;
  pomodoroInput: number;
  shortBreakInput: number;
  longBreakInput: number;
}

export type PomodoroContextProps = {
  progress: number;
  setProgress: (n: number) => void;
  themes: ThemeInterface;
  setThemes: (el: ThemeInterface) => void;
  titleTimer: string;
  setTitleTimer: (s: string) => void;
  valuesInputTimer: ValueInput;
  setValuesInputTimer: (n: ValueInput) => void;
};
