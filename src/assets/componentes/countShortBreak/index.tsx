import type { Value } from "../countPomodoro/countPomodoro";

function CountShortBreak({ value }: Value) {
  return (
    <div>
      <div className="text-[2rem] pt-[1rem]">
        Short Break count : {value}
      </div>
    </div>
  );
}

export default CountShortBreak;
