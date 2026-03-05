/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import Countdown, { type CountdownRenderProps } from "react-countdown";
import Btn from "../Button/index";
import { ButtonGroup } from "@/components/ui/button-group";
import BtnAnimation from "@/componentes/BtnAnimation/index";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";
import CountPomodoro from "../CountPomodoro/index";
import type { Count } from "../CountPomodoro/countPomodoro";
import CountShortBreak from "../CountShortBreak";
import CountLongBreak from "../CountLongBreak/index";
import alarmDigital from "@/assets/media/alarm-digital.mp3";
import alarmKitchen from "@/assets/media/alarm-kitchen.mp3";
import { getStoredPomodoroState } from "@/utils/pomodoroStorage";

function Timer() {
  const pomodoroContext = useContext(PomodoroContext);
  const [category, setCategory] = useState<
    "Short break" | "Pomodoro" | "Long break"
  >(() => {
    const s = getStoredPomodoroState();
    const t = s.titleTimer;
    if (t === "Short break" || t === "Long break") return t;
    return "Pomodoro";
  });
  const countdownRef = useRef<Countdown | null>(null);
  const [buttonValue, setButtonValue] = useState<string>("START");
  const [count, setCount] = useState<Count>({
    countPomodoro: 1,
    countShortBreak: 1,
    countLongBreak: 1,
  });
  const alarmTimer = useRef({
    pomodoroAlarm: false,
    shortBreakAlarm: false,
    longBreakAlarm: false,
  });
  /** Áudio desbloqueado no primeiro toque (Start) para tocar no celular sem nova interação */
  const unlockedAudioRef = useRef<{
    digital: HTMLAudioElement | null;
    kitchen: HTMLAudioElement | null;
  }>({ digital: null, kitchen: null });
  const targetDateRef = useRef(0);
  const handleCategoryChangeRef = useRef<typeof handleCategoryChange | null>(null);
  const isRunningRef = useRef(false);
  const [width, setWidth] = useState(window.innerWidth);
  isRunningRef.current = buttonValue === "PAUSE";

  const pomodoroMinutes =
    (pomodoroContext?.valuesInputTimer.pomodoroInput || 0) * 60 * 1000;
  const shortMinutes =
    (pomodoroContext?.valuesInputTimer.shortBreakInput || 0) * 60 * 1000;
  const restMinutes =
    (pomodoroContext?.valuesInputTimer.longBreakInput || 0) * 60 * 1000;

  const [targetDate, setTargetDate] = useState<number>(() => {
    const s = getStoredPomodoroState();
    return Date.now() + s.progress * 1000;
  });

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
      alarmTimer.current.pomodoroAlarm = true;
      newCategory = "Short break";
      setCount({
        ...count,
        countPomodoro: count.countPomodoro + 1,
      });
    } else if (category === "Short break") {
      alarmTimer.current.shortBreakAlarm = true;
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
      alarmTimer.current.longBreakAlarm = true;
      setCount({
        ...count,
        countLongBreak: count.countLongBreak + 1,
      });
    }
    countdownRef.current?.stop();
    setCategory(newCategory);
    setButtonValue("START");
    const duration = getDuration(newCategory);
    setTargetDate(Date.now() + duration);
    pomodoroContext?.setProgress(duration / 1000);
    pomodoroContext?.setTitleTimer(newCategory);
  };
  targetDateRef.current = targetDate;
  handleCategoryChangeRef.current = handleCategoryChange;

  /** Desbloqueia o áudio no primeiro gesto do usuário (obrigatório no celular) e pede permissão de notificação */
  const unlockAudioAndNotifications = () => {
    if (unlockedAudioRef.current.digital) return; // já desbloqueado
    const digital = new Audio(alarmDigital);
    const kitchen = new Audio(alarmKitchen);
    const playThenPause = (a: HTMLAudioElement) => {
      a.volume = 0.01;
      a.play().then(() => { a.pause(); a.currentTime = 0; a.volume = 1; }).catch(() => {});
    };
    playThenPause(digital);
    playThenPause(kitchen);
    unlockedAudioRef.current = { digital, kitchen };
    if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
  };

  const handleButtonStart = () => {
    const countdown = countdownRef.current;
    if (!countdown) return;
    if (buttonValue === "START") {
      unlockAudioAndNotifications();
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
    return (
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    );
  };

  const isFirstMount = useRef(true);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    } else {
      const duration = getDuration(category);
      setTargetDate(Date.now() + duration);
      pomodoroContext?.setProgress(duration / 1000);
    }

    if (
      alarmTimer.current.pomodoroAlarm === true ||
      alarmTimer.current.shortBreakAlarm === true ||
      alarmTimer.current.longBreakAlarm === true
    ) {
      const useKitchen = pomodoroContext?.alarmType === "Kitchen";
      const unlocked = useKitchen
        ? unlockedAudioRef.current.kitchen
        : unlockedAudioRef.current.digital;
      if (unlocked) {
        unlocked.currentTime = 0;
        unlocked.volume = 1;
        unlocked.play().catch(() => {});
      } else {
        const audio = new Audio(useKitchen ? alarmKitchen : alarmDigital);
        audio.play().catch(() => {});
      }
      if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
        try {
          new Notification("Timer concluído!", {
            body: "Hora de uma pausa ou de voltar ao foco.",
            icon: "/favicon.ico",
          });
        } catch {
          // ignore
        }
      }
      alarmTimer.current.pomodoroAlarm = false;
      alarmTimer.current.shortBreakAlarm = false;
      alarmTimer.current.longBreakAlarm = false;
    }
  }, [
    pomodoroMinutes,
    shortMinutes,
    restMinutes,
    alarmTimer.current.pomodoroAlarm,
    alarmTimer.current.shortBreakAlarm,
    alarmTimer.current.longBreakAlarm,
  ]);

  /** Ao voltar ao app (ex.: desbloquear celular), se o timer já terminou, dispara conclusão para tocar som e notificação */
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") return;
      if (!isRunningRef.current || Date.now() < targetDateRef.current) return;
      handleCategoryChangeRef.current?.({ isCompleted: true });
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  window.onresize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div>
      <div
        className={`flex flex-col text-[#FFF] w-[100%] h-[31.2rem]
          bg-[rgba(255,255,255,0.2)] rounded-2xl self-center 
          mt-[5rem] max-[500px]:w-[90vw] max-[370px]:h-[88vw]`}
      >
        <ButtonGroup
          className={
            width <= 400
              ? "flex justify-center w-[100%] pt-[3rem]"
              : "flex justify-center w-[100%] px-[5rem] pt-[3rem]"
          }
        >
          {
            <Btn
              className={`text-[1.6rem] p-[1.5rem] cursor-pointer text-3xl 
                  w-[12rem] border-0 bg-0 shadow-none hover:bg-none 
                  max-[500px]:w-[22vw] max-[485px]:text-2xl`}
              value={width <= 400 ? "Pomo" : "Pomodoro"}
              onClick={() => handleCategoryChange({ nextCategory: "Pomodoro" })}
              style={{
                backgroundColor:
                  category === "Pomodoro" ? "rgba(0,0,0,0.2)" : "transparent",
                fontWeight: category === "Pomodoro" ? "bold" : "normal",
              }}
            />
          }
          <Btn
            className={`text-[1.6rem] p-[1.5rem] cursor-pointer 
              text-3xl w-[12rem] border-0 bg-0 
              max-[500px]:w-[22vw] shadow-none max-[485px]:text-2xl`}
            value={width <= 400 ? "Short" : "Short break"}
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
            className={`text-[1.6rem] p-[1.5rem] cursor-pointer 
              text-3xl w-[12rem] border-0 bg-0 shadow-none 
              max-[500px]:w-[22vw] max-[485px]:text-2xl`}
            value={width <= 400 ? "Long" : "Long break"}
            onClick={() => handleCategoryChange({ nextCategory: "Long break" })}
            style={{
              backgroundColor:
                category === "Long break" ? "rgba(0,0,0,0.2)" : "transparent",
              fontWeight: category === "Long break" ? "bold" : "normal",
            }}
          />
        </ButtonGroup>
        <div
          className={
            width <= 400
              ? "text-[30vw] text-center font-bold font text-[#FFF]"
              : "text-[12rem] text-center font-bold font text-[#FFF]"
          }
        >
          <Countdown
            onTick={({ minutes, seconds }) => {
              pomodoroContext?.setProgress(minutes * 60 + seconds);
            }}
            onComplete={() => {
              pomodoroContext?.setProgress(0);
              handleCategoryChange({
                nextCategory: undefined,
                isCompleted: true,
              });
            }}
            ref={countdownRef}
            autoStart={false}
            date={targetDate}
            renderer={renderer}
          />
        </div>
        <div className="flex justify-center">
          <BtnAnimation
            className={`w-[16rem] h-[5rem] text-5xl bg-[#FFF] 
              hover:bg-none cursor-pointer max-[365px]:w-[40vw] 
              max-[365px]:text-[8vw] max-[365px]:h-[14vw]`}
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
