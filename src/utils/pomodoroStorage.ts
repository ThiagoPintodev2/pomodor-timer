import type { ThemeInterface, ValueInput } from "@/contexts/pomodoroContext/PomodoroContextProps";

const STORAGE_KEY = "pomodoro-settings";

const defaultValuesInput: ValueInput = {
  valueIntervalInput: 2,
  pomodoroInput: 25,
  shortBreakInput: 5,
  longBreakInput: 15,
};

const defaultThemes: ThemeInterface = {
  pomodoro: "#4a9ef2",
  shortBreak: "green",
  longBreak: "blue",
};

export interface StoredPomodoroState {
  titleTimer: string;
  themes: ThemeInterface;
  valuesInputTimer: ValueInput;
  progress: number;
  alarmType: string;
  sliderAlarmSound: number[];
  sliderTickingSound: number[];
}

const defaultState: StoredPomodoroState = {
  titleTimer: "Pomodoro",
  themes: defaultThemes,
  valuesInputTimer: defaultValuesInput,
  progress: defaultValuesInput.pomodoroInput * 60,
  alarmType: "Digital",
  sliderAlarmSound: [50],
  sliderTickingSound: [50],
};

function parseProgress(titleTimer: string, values: ValueInput, progress: number): number {
  const maxByMode =
    titleTimer === "Pomodoro"
      ? values.pomodoroInput * 60
      : titleTimer === "Short break"
        ? values.shortBreakInput * 60
        : values.longBreakInput * 60;
  return Math.min(progress, maxByMode);
}

export function getStoredPomodoroState(): StoredPomodoroState {
  try {
    const locStorage = localStorage.getItem(STORAGE_KEY);
    if (!locStorage) return { ...defaultState };
    const parsed = JSON.parse(locStorage) as Partial<StoredPomodoroState>;
    const inputTimer = parsed.valuesInputTimer;
    const n = (key: keyof ValueInput) => {
      const val = Number(inputTimer?.[key]);
      return Number.isFinite(val) && val > 0 ? val : defaultValuesInput[key];
    };
    const valuesInputTimer: ValueInput = {
      valueIntervalInput: n("valueIntervalInput"),
      pomodoroInput: n("pomodoroInput"),
      shortBreakInput: n("shortBreakInput"),
      longBreakInput: n("longBreakInput"),
    };
    const themes: ThemeInterface = {
      pomodoro: parsed.themes?.pomodoro ?? defaultThemes.pomodoro,
      shortBreak: parsed.themes?.shortBreak ?? defaultThemes.shortBreak,
      longBreak: parsed.themes?.longBreak ?? defaultThemes.longBreak,
    };
    const titleTimer = parsed.titleTimer ?? defaultState.titleTimer;
    const rawProgress = Number(parsed.progress);
    const progress = parseProgress(
      titleTimer,
      valuesInputTimer,
      Number.isNaN(rawProgress) ? defaultState.progress : rawProgress
    );
    return {
      titleTimer,
      themes,
      valuesInputTimer,
      progress,
      alarmType: parsed.alarmType ?? defaultState.alarmType,
      sliderAlarmSound: Array.isArray(parsed.sliderAlarmSound) && parsed.sliderAlarmSound.length
        ? parsed.sliderAlarmSound
        : defaultState.sliderAlarmSound,
      sliderTickingSound: Array.isArray(parsed.sliderTickingSound) && parsed.sliderTickingSound.length
        ? parsed.sliderTickingSound
        : defaultState.sliderTickingSound,
    };
  } catch {
    return { ...defaultState };
  }
}

export function setStoredPomodoroState(state: Partial<StoredPomodoroState>): void {
  try {
    const current = getStoredPomodoroState();
    const next = { ...current, ...state };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore storage errors (e.g. private mode)
  }
}
