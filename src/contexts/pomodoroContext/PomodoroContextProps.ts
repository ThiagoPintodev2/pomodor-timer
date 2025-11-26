export interface ThemeInterface {
  pomodoro: string;
  shortBreak: string;
  longBreak: string;
}

export interface ValueInput {
  valueIntervalInput: number
  pomodoroInput: number;
  shortBreakInput: number;
  longBreakInput: number;
}

export type PomodoroContextProps = {
  themes: ThemeInterface;
  setThemes: (el: ThemeInterface) => void;
  titleTimer: string;
  setTitleTimer: (s: string) => void;
  valuesInputTimer: ValueInput;
  setValuesInputTimer: (n: ValueInput) => void;
};
