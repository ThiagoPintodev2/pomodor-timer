export interface Value {
  value: number
}

export type Count = {
  value?: Value
  countPomodoro: number;
  countShortBreak: number;
  countLongBreak: number;
};
