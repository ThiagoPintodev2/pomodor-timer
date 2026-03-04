import InputConfiguration from "../InputConfiguration/index";
import DefaultTitle from "../DefaultTitle/index";
import SectionTitle from "../SectionTitle";
import { CgTimer } from "react-icons/cg";
import LongIntervalSection from "../LongIntervalSection/index";
import { useContext, useEffect, useState } from "react";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";

function safeParseMinutes(value: string): number | null {
  if (value.trim() === "") return null;
  const num = parseFloat(value);
  return Number.isFinite(num) && num > 0 ? num : null;
}

function TimerSection() {
  const timerValue = useContext(PomodoroContext);
  const valueTimer = timerValue?.valuesInputTimer;
  const [localPomodoro, setLocalPomodoro] = useState(() =>
    valueTimer && Number.isFinite(valueTimer.pomodoroInput)
      ? String(valueTimer.pomodoroInput)
      : "",
  );
  const [localShortBreak, setLocalShortBreak] = useState(() =>
    valueTimer && Number.isFinite(valueTimer.shortBreakInput)
      ? String(valueTimer.shortBreakInput)
      : "",
  );
  const [localLongBreak, setLocalLongBreak] = useState(() =>
    valueTimer && Number.isFinite(valueTimer.longBreakInput)
      ? String(valueTimer.longBreakInput)
      : "",
  );

  useEffect(() => {
    if (valueTimer && Number.isFinite(valueTimer.pomodoroInput))
      setLocalPomodoro(String(valueTimer.pomodoroInput));
    if (valueTimer && Number.isFinite(valueTimer.shortBreakInput))
      setLocalShortBreak(String(valueTimer.shortBreakInput));
    if (valueTimer && Number.isFinite(valueTimer.longBreakInput))
      setLocalLongBreak(String(valueTimer.longBreakInput));
  }, [valueTimer]);

  const handleChangeValueTimerPomodoro = (e: string) => {
    setLocalPomodoro(e);
    const num = safeParseMinutes(e);
    if (num !== null) {
      timerValue?.setValuesInputTimer({
        ...timerValue.valuesInputTimer,
        pomodoroInput: num,
      });
    }
  };

  const handleChangeValueTimerShortBreak = (e: string) => {
    setLocalShortBreak(e);
    const num = safeParseMinutes(e);
    if (num !== null) {
      timerValue?.setValuesInputTimer({
        ...timerValue.valuesInputTimer,
        shortBreakInput: num,
      });
    }
  };

  const handleChangeValueTimerLongBreak = (e: string) => {
    setLocalLongBreak(e);
    const num = safeParseMinutes(e);
    if (num !== null) {
      timerValue?.setValuesInputTimer({
        ...timerValue.valuesInputTimer,
        longBreakInput: num,
      });
    }
  };

  return (
    <div>
      <div
        className={`flex flex-col m-auto px-[1.5rem] pb-[1.5rem] w-[41rem] bg-[#FFF] max-[435px]:w-[90vw]`}
      >
        <div>
          <SectionTitle img={<CgTimer />} value={"TIMER"} />
        </div>
        <DefaultTitle value={"Time (minutes)"} />
        <div className="flex gap-[2rem] justify-between mt-[0.5rem]">
          <InputConfiguration
            className={
              "w-[9rem] h-[3.5rem] text-[1.6rem] bg-gray-200 max-[390px]:w-[22vw]"
            }
            label={"Pomodoro"}
            placeholder={"25"}
            value={localPomodoro}
            onChange={(e) => handleChangeValueTimerPomodoro(e.target.value)}
          />
          <InputConfiguration
            className={
              "w-[9rem] h-[3.5rem] text-[1.6rem] bg-gray-200 max-[390px]:w-[22vw]"
            }
            label={"Short break"}
            placeholder={"5"}
            value={localShortBreak}
            onChange={(e) => handleChangeValueTimerShortBreak(e.target.value)}
          />
          <InputConfiguration
            className={
              "w-[9rem] h-[3.5rem] text-[1.6rem] bg-gray-200 max-[390px]:w-[22vw]"
            }
            label={"Long break"}
            placeholder={"15"}
            value={localLongBreak}
            onChange={(e) => handleChangeValueTimerLongBreak(e.target.value)}
          />
        </div>
        <LongIntervalSection />
        <div className="w-[38rem] bg-gray-200 h-[0.1rem] mt-[2rem] max-[435px]:w-[85vw]"></div>
      </div>
    </div>
  );
}

export default TimerSection;
