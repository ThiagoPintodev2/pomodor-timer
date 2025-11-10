import { useEffect, useState } from "react";

function TimerVanila() {
  const [countdown, setCountDown] = useState(90);
  //const [time, setTime] = useState(new Date())

  const formatToTime = (seconds: number) => {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    return `${minutes}:${remainingSeconds.toString()}`;
  };

  useEffect(() => {
    const time = setInterval(() => {
      setCountDown((prev) => prev - 1);
      console.log(countdown);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [countdown]);

  return (
    <div className="text-[8rem]">
      <p>{formatToTime(countdown)}</p>
      {/* <div>{time.toLocaleString()}</div> */}
    </div>
  );
}

export default TimerVanila;
