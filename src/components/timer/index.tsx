import { useRef, useState } from "react";
import Countdown, { type CountdownRenderProps } from "react-countdown";
import Btn from "../../assets/componentes/button/Index";
import { ButtonGroup } from "../ui/button-group";


export default function Timer() {
  const pomodoroMinutes = 25 * 60 * 1000;
  const shortMinutes = 5 * 60 * 1000;
  const restMinutes = 20 * 60 * 1000;

  const [category, setCategory] = useState<"short" | "focus" | "rest">("focus");
  const countdownRef = useRef<Countdown | null>(null);

  // Define o tempo atual com base na categoria
  const currentTime =
    category === "focus"
      ? pomodoroMinutes
      : category === "short"
      ? shortMinutes
      : restMinutes;

  // 🔹 renderer personalizado — mostra apenas minutos e segundos
  const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <span>00:00</span>;
    }

    return (
      <span>
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </span>
    );
  };

  return (
    <div className="w-[48rem] h-[31.2rem] bg-[#ba4949] rounded-2xl self-center mt-[5rem]">
      <ButtonGroup className="flex justify-around w-[100%] px-[5rem] pt-[3rem]">
        <Btn
          className={"text-[1.6rem] p-[1.5rem] cursor-pointer"}
          value={"Pomodoro"}
          onClick={() => setCategory("focus")}
        />
        <Btn
          className={"text-[1.6rem] p-[1.5rem] cursor-pointer"}
          value={"Pausa curta"}
          onClick={() => setCategory("short")}
        />
        <Btn
          className={"text-[1.6rem] p-[1.5rem] cursor-pointer"}
          value={"Pausa longa"}
          onClick={() => setCategory("rest")}
        />
      </ButtonGroup>

      <div className="text-[12rem] text-center font-bold font text-[#FFF]">
        <Countdown
          ref={countdownRef}
          autoStart={false}
          date={Date.now() + currentTime}
          renderer={renderer} 
        />
      </div>

      <div className="flex justify-center">
        <Btn
          className={"w-[16rem] h-[5rem] text-5xl text-[#ba4949] cursor-pointer"}
          value={"START"}
          onClick={() => countdownRef.current?.start()}
        />
      </div>
    </div>
  );
}