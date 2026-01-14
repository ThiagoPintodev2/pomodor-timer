import InputConfiguration from "../inputConfiguration/Index";
import DefaultTitle from "../defaultTitle/Index";
import SectionTitle from "../sectionTitle";
import { CgTimer } from "react-icons/cg";
import SwitchSection from "../swicthSection/Index";
import { useContext } from "react";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";

function TimerSection() {
  const timerValue = useContext(PomodoroContext);

  const handleChangeValueTimerPomodoro = (e: string) => {
    const timeValueInputPomodoro = parseFloat(e);
    timerValue?.setValuesInputTimer({
      ...timerValue.valuesInputTimer,
      pomodoroInput: timeValueInputPomodoro,
    });
  };

  const handleChangeValueTimerShortBreak = (e: string) => {
    const timeValueInputShortBreak = parseFloat(e);
    timerValue?.setValuesInputTimer({
      ...timerValue.valuesInputTimer,
      shortBreakInput: timeValueInputShortBreak,
    });
  };

  const handleChangeValueTimerLongBreak = (e: string) => {
    const timeValueInputLongBreak = parseFloat(e);
    timerValue?.setValuesInputTimer({
      ...timerValue.valuesInputTimer,
      longBreakInput: timeValueInputLongBreak,
    });
  };

  return (
    <div>
      <div className={`flex flex-col m-auto px-[1.5rem] pb-[1.5rem] w-[41rem] bg-[#FFF] max-[435px]:w-[90vw]`}>
        <div>
          <SectionTitle img={<CgTimer />} value={"TIMER"} />
        </div>
        <DefaultTitle value={"Time (minutes)"} />
        <div className="flex gap-[2rem] justify-between mt-[0.5rem]">
          <InputConfiguration
            className={
              "w-[9rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200 max-[390px]:w-[22vw]"
            }
            label={"Pomodoro"}
            placeholder={"25"}
            onChange={(e) => handleChangeValueTimerPomodoro(e.target.value)}
          />
          <InputConfiguration
            className={
              "w-[9rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200 max-[390px]:w-[22vw]"
            }
            label={"Short break"}
            placeholder={"5"}
            onChange={(e) => handleChangeValueTimerShortBreak(e.target.value)}
          />
          <InputConfiguration
            className={
              "w-[9rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200 max-[390px]:w-[22vw]"
            }
            label={"Long break"}
            placeholder={"15"}
            onChange={(e) => handleChangeValueTimerLongBreak(e.target.value)}
          />
        </div>
        <SwitchSection />

        <div className="w-[38rem] bg-gray-200 h-[0.1rem] mt-[2rem] max-[435px]:w-[85vw]"></div>
      </div>
    </div>
  );
}

export default TimerSection;
