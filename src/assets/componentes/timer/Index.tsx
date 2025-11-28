/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import Countdown, { type CountdownRenderProps } from "react-countdown";
import Btn from "../button/Index";
import { ButtonGroup } from "../../../components/ui/button-group";
import BtnAnimation from "@/assets/componentes/btnAnimation/Index";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";
import CountPomodoro from "../countPomodoro/Index";
import type { Count } from "../countPomodoro/countPomodoro";
import CountShortBreak from "../countShortBreak";
import CountLongBreak from "../countLongBreak/Index";


function Timer() {
  const pomodoroContext = useContext(PomodoroContext);
  const [category, setCategory] = useState<
    "Short break" | "Pomodoro" | "Long break"
  >("Pomodoro");
  const countdownRef = useRef<Countdown | null>(null);
  const [buttonValue, setButtonValue] = useState<string>("START");
  const [count, setCount] = useState<Count>({
    countPomodoro: 1,
    countShortBreak: 1,
    countLongBreak: 1,
  });

  const pomodoroMinutes =
    (pomodoroContext?.valuesInputTimer.pomodoroInput || 0) * 60 * 1000;
  const shortMinutes =
    (pomodoroContext?.valuesInputTimer.shortBreakInput || 0) * 60 * 1000;
  const restMinutes =
    (pomodoroContext?.valuesInputTimer.longBreakInput || 0) * 60 * 1000;

  const [targetDate, setTargetDate] = useState<number>(
    Date.now() + pomodoroMinutes
  );

  const getDuration = (cat: "Short break" | "Pomodoro" | "Long break") => {
    if (cat === "Pomodoro") return pomodoroMinutes;
    if (cat === "Short break") return shortMinutes;
    return restMinutes;
  };
  type Category = "Pomodoro" | "Short break" | "Long break";

  const handleCategoryChange = ({
    isCompleted = false,
    nextCategory,
  }: {
    isCompleted?: boolean;
    nextCategory?: Category;
  }) => {
    let newCategory: "Short break" | "Pomodoro" | "Long break";

    if (nextCategory) {
      newCategory = nextCategory;
    } else if (category === "Pomodoro" && isCompleted === true) {
      newCategory = "Short break";
      setCount({
        ...count,
        countPomodoro: count.countPomodoro + 1,
      });
    } else if (category === "Short break") {
      newCategory = "Pomodoro";
      setCount({
        ...count,
        countShortBreak: count.countShortBreak + 1,
      });
    } else {
      newCategory = "Pomodoro";
    }
    if (
      category === "Pomodoro" &&
      count.countPomodoro ===
        pomodoroContext?.valuesInputTimer.valueIntervalInput
    ) {
      newCategory = "Long break";
      setCount({
        ...count,
        countPomodoro: (count.countPomodoro = 1),
      });
    }
    if (category === "Long break" && isCompleted === true) {
      setCount({
        ...count,
        countLongBreak: count.countLongBreak + 1,
      });
    }
    countdownRef.current?.stop();
    setCategory(newCategory);
    setButtonValue("START");
    setTargetDate(Date.now() + getDuration(newCategory));
    pomodoroContext?.setTitleTimer(newCategory);
  };

  const handleButtonStart = () => {
    const countdown = countdownRef.current;
    if (!countdown) return;
    if (buttonValue === "START") {
      if (countdown.isStopped() || countdown.isCompleted()) {
        setTargetDate(Date.now() + getDuration(category));
      }
      setButtonValue("PAUSE");
      countdown.start();
    } else {
      countdown.pause();
      setButtonValue("START");
    }
  };

  const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <span>00:00</span>;
    } 
    pomodoroContext?.setProgress((minutes * 60) + seconds)
      return (
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    );
    
  };

  useEffect(() => {
    setTargetDate(Date.now() + getDuration(category));
  }, [pomodoroMinutes, shortMinutes, restMinutes]);

  return (
    <div>
      <div className="flex flex-col text-[#FFF] te w-[48rem] h-[31.2rem] bg-[rgba(255,255,255,0.2)] rounded-2xl self-center mt-[5rem]">
        <ButtonGroup className="flex justify-around w-[100%] px-[5rem] pt-[3rem]">
          <Btn
            className={
              "text-[1.6rem] p-[1.5rem] cursor-pointer text-3xl border-0 bg-0 shadow-none hover:bg-none"
            }
            value={"Pomodoro"}
            onClick={() => handleCategoryChange({ nextCategory: "Pomodoro" })}
            style={{
              backgroundColor:
                category === "Pomodoro" ? "rgba(0,0,0,0.2)" : "transparent",
              fontWeight: category === "Pomodoro" ? "bold" : "normal",
            }}
          />
          <Btn
            className={
              "text-[1.6rem] p-[1.5rem] cursor-pointer text-3xl  border-0 bg-0 shadow-none"
            }
            value={"Short break"}
            onClick={() =>
              handleCategoryChange({ nextCategory: "Short break" })
            }
            style={{
              backgroundColor:
                category === "Short break" ? "rgba(0,0,0,0.2)" : "transparent",
              fontWeight: category === "Short break" ? "bold" : "normal",
            }}
          />
          <Btn
            className={
              "text-[1.6rem] p-[1.5rem] cursor-pointer text-3xl  border-0 bg-0 shadow-none"
            }
            value={"Long break"}
            onClick={() => handleCategoryChange({ nextCategory: "Long break" })}
            style={{
              backgroundColor:
                category === "Long break" ? "rgba(0,0,0,0.2)" : "transparent",
              fontWeight: category === "Long break" ? "bold" : "normal",
            }}
          />
        </ButtonGroup>
        <div className="text-[12rem] text-center font-bold font text-[#FFF]">
          <Countdown
            onComplete={() =>
              handleCategoryChange({
                nextCategory: undefined,
                isCompleted: true,
              })
            }
            ref={countdownRef}
            autoStart={false}
            date={targetDate}
            renderer={renderer}
          />
        </div>
        <div className="flex justify-center">
          <BtnAnimation
            className="w-[16rem] h-[5rem] text-5xl bg-[#FFF] hover:bg-none cursor-pointer"
            style={{
              color:
                pomodoroContext?.titleTimer === "Pomodoro"
                  ? `${pomodoroContext.themes.pomodoro}`
                  : pomodoroContext?.titleTimer === "Short break"
                  ? `${pomodoroContext?.themes.shortBreak}`
                  : `${pomodoroContext?.themes.longBreak}`,
            }}
            value={buttonValue}
            onClick={handleButtonStart}
          />
        </div>
      </div>
      <div className="text-center text-[#FFFFFF]">
        {category === "Pomodoro" ? (
          <CountPomodoro value={count.countPomodoro} />
        ) : category === "Short break" ? (
          <CountShortBreak value={count.countShortBreak} />
        ) : (
          <CountLongBreak value={count.countLongBreak} />
        )}
      </div>
    </div>
  );
}

export default Timer;
