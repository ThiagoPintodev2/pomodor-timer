import { useRef, useState } from "react";
import Countdown, { type CountdownRenderProps } from "react-countdown";
import Btn from "../../assets/componentes/button/Index";
import { ButtonGroup } from "../ui/button-group";
import BtnAnimation from "@/assets/componentes/btnAnimation/Index";


function Timer() {
  const pomodoroMinutes = 25 * 60 * 1000;
  const shortMinutes = 5 * 60 * 1000;
  const restMinutes = 20 * 60 * 1000;
  const [category, setCategory] = useState<"short" | "focus" | "rest">("focus");
  const countdownRef = useRef<Countdown | null>(null);
  const [ buttonValue, setButtonValue ] = useState<string>('START')

  const handleButtonStart = () => {
    if(buttonValue === 'START') {
      setButtonValue('PAUSE')
      countdownRef.current?.start()
    } else {
      setButtonValue('START')
      countdownRef.current?.stop()
      }
  }

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
    <div className="flex flex-col w-[48rem] border-2 h-[31.2rem] bg-amber-400/100 rounded-2xl self-center mt-[5rem]">
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
          controlled={false}
          
        />
      </div>

      <div className="flex justify-center">
        <BtnAnimation
          className={"w-[16rem] h-[5rem] text-5xl bg-[#FFF] hover:bg-none text-[#ba4949] cursor-pointer"}
          value={buttonValue}
          onClick={handleButtonStart}
        />
      </div>
    </div>
  );
}
export default Timer