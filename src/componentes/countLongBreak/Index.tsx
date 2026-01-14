import type { Value } from "../countPomodoro/countPomodoro"

function CountLongBreak({value}: Value) {
  return (
    <div>
      <div>
      <div className="text-[2rem] pt-[1rem]">
        Short Break count : {value}
      </div>
    </div>
    </div>
  )
}

export default CountLongBreak
