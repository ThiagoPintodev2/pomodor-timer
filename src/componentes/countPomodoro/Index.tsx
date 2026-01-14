import type { Value } from "./countPomodoro";

function CountPomodoro({ value }: Value) {
  return (
    <div className="text-[2rem] pt-[1rem]">
      Pomodoro count : {value}
    </div>
  );
}

export default CountPomodoro;
