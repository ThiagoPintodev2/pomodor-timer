import DefaultTitle from "../DefaultTitle/index";
import InputConfiguration from "../InputConfiguration/index";
import { useContext, useEffect, useState } from "react";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";

function safeParseInterval(value: string): number | null {
  if (value.trim() === "") return null;
  const num = parseFloat(value);
  return Number.isFinite(num) && num > 0 ? num : null;
}

function LongIntervalSection() {
  const valueLongBreakInterval = useContext(PomodoroContext);
  const v = valueLongBreakInterval?.valuesInputTimer.valueIntervalInput;
  const [localInterval, setLocalInterval] = useState(() =>
    v != null && Number.isFinite(v) ? String(v) : "",
  );

  useEffect(() => {
    if (v != null && Number.isFinite(v)) setLocalInterval(String(v));
  }, [v]);

  const handleValueLongBreakInterval = (e: string) => {
    setLocalInterval(e);
    const num = safeParseInterval(e);
    if (num !== null) {
      valueLongBreakInterval?.setValuesInputTimer({
        ...valueLongBreakInterval.valuesInputTimer,
        valueIntervalInput: num,
      });
    }
  };

  return (
    <div className="flex flex-col my-[2rem] gap-[3rem]">
      <div className="flex items-center justify-between">
        <DefaultTitle value={"Long Breack Interval"} />
        <InputConfiguration
          className="w-[6.5rem] h-[3.5rem] text-[1.6rem] bg-gray-200"
          label={""}
          placeholder={"4"}
          value={localInterval}
          onChange={(e) => handleValueLongBreakInterval(e.target.value)}
        />
      </div>
    </div>
  );
}

export default LongIntervalSection;
