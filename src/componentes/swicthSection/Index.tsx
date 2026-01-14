import { Switch } from "@/components/ui/switch";
import DefaultTitle from "../defaultTitle/Index";
import InputConfiguration from "../inputConfiguration/Index";
import { useContext } from "react";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";

function SwitchSection() {
  const valueLongBreakInterval = useContext(PomodoroContext)

  const handleValueLongBreakInterval = (e: string) => {
    const intervalLongBreak = parseFloat(e)
    valueLongBreakInterval?.setValuesInputTimer(
      {
        ...valueLongBreakInterval.valuesInputTimer,
        valueIntervalInput: intervalLongBreak
      }
    )
  }

  return (
    <div className="flex flex-col my-[2rem] gap-[3rem]">
      <div className="flex items-center justify-between">
        <DefaultTitle value={"Auto Start Breaks"} />
        <Switch />
      </div>
      <div className="flex items-center justify-between">
        <DefaultTitle value={"Auto Start Pomodoros"} />
        <Switch />
      </div>
      <div className="flex items-center justify-between">
        <DefaultTitle value={"Long Breack Interval"} />
        <InputConfiguration
          className="w-[6.5rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200"
          label={""}
          placeholder={"4"}
          onChange={(e) => handleValueLongBreakInterval(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SwitchSection;
