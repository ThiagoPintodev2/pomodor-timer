/* eslint-disable react-hooks/exhaustive-deps */
import SettingIcon from "../settingIcon/Index";
import SignInIcon from "../signInIcon/Index";
import { CiTimer } from "react-icons/ci";
import WindowSetting from "../windowSetting/Index";
import { NavLink, Outlet } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Btn from "../button/Index";
import { Progress } from "@/components/ui/progress";
import { useContext, useEffect, useState } from "react";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";

function Header() {
  const pomodoroContext = useContext(PomodoroContext);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  let totalMinutos = 0;
  switch (pomodoroContext?.titleTimer) {
    case "Pomodoro":
      totalMinutos = pomodoroContext?.valuesInputTimer.pomodoroInput * 60 || 0;
      break;
    case "Short break":
      totalMinutos =
        pomodoroContext?.valuesInputTimer.shortBreakInput * 60 || 0;
      break;
    case "Long break":
      totalMinutos = pomodoroContext?.valuesInputTimer.longBreakInput * 60 || 0;
      break;
  }
  useEffect(() => {
    const timer = setTimeout(
      () => pomodoroContext?.setProgress(pomodoroContext.progress),
      500
    );
    return () => clearTimeout(timer);
  }, []);
  
  const totalSeconds = totalMinutos;
  const remainingSeconds = pomodoroContext?.progress ?? totalSeconds;
  const progressPercent =
  totalSeconds > 0
  ? Math.min(
    100,
    Math.max(0, ((totalSeconds - remainingSeconds) / totalSeconds) * 100)
  )
  : 0;
  
 window.addEventListener("resize", () => {
  setWidth(window.innerWidth);
});
  return (
    <>
      <div className={`flex text-[#FFF] gap-[1rem] mt-[1rem] items-center`}>
        {
          width <= 360 ? <CiTimer size={30} className={`pr-[20vw]`} /> : <h1 className={`mr-[10vw] text-[2rem] font-bold`}>ThiagoPomo</h1>
        }
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            asChild
            className={`flex items-center hover:bg-white/20 
                hover:text-none cursor-pointer justify-center 
                gap-3 bg-[rgba(255,255,255,0.2)] text-[1.7rem] 
                h-[4rem] rounded-[0.5rem] border shadow-xs
                hover:text-gray-300 dark:bg-input/30 
                dark:border-input dark:hover:bg-input/50`}
          >
            {width <= 555 ? (
              <button className={`w-[5rem]`}>{<SettingIcon />}</button>
            ) : (
              <button className={`w-[10rem] `}>
                {<SettingIcon />}
                {"SETTING"}
              </button>
            )}
          </DialogTrigger>
          <DialogContent
            className="
                overflow-y-auto scroll-area
                h-[92vh]
                rounded-2xl max-[435px]:w-[90vw] max-[450px]:overflow-x-hidden"
          >
            <DialogHeader>
              <DialogTitle />
              <DialogDescription asChild>
                <div>
                  <WindowSetting />
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end mt-4">
              <Btn
                className={`w-[8rem] h-[4rem] my-[3rem] mr-[2rem] 
                  hover:bg-gray-500 rounded-2xl 
                  bg-gray-400 text-[#FFF] 
                  cursor-pointer text-[1.5rem]`}
                value={"OK"}
                onClick={() => setOpen(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
        {width <= 555 ? (
          <NavLink to="/signin">
            <Btn
              className={`flex items-center justify-center gap-3 
                bg-[rgba(255,255,255,0.2)] text-[1.7rem] 
                w-[5rem] h-[4rem] rounded-[0.5rem] 
                font-normal cursor-pointer hover:text-gray-300`}
              img={<SignInIcon />}
            />
          </NavLink>
        ) : (
          <NavLink to="/signin">
            <Btn
              className={`flex items-center justify-center gap-3
                 bg-[rgba(255,255,255,0.2)] text-[1.7rem] 
                 w-[10rem] h-[4rem] rounded-[0.5rem] 
                 font-normal cursor-pointer hover:text-gray-300`}
              value={"SIGN IN"}
              img={<SignInIcon />}
            />
          </NavLink>
        )}
      </div>
      <div className="flex items-center w-[80vw] bg-gray-200 h-[0.1rem] mt-[2rem] sm:w-[58rem]">
        <Progress value={progressPercent} max={100} className="w-[100%] " />
      </div>
      <Outlet />
    </>
  );
}
export default Header;
