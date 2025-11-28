import SettingIcon from "../settingIcon/Index";
import SignInIcon from "../signInIcon/Index";
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

  useEffect(() => {
    const timer = setTimeout(() => pomodoroContext?.setProgress(pomodoroContext.progress), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex text-[#FFF] gap-[1rem] mt-[1rem] items-center">
        <h1 className="mr-[10rem] text-[2rem] font-bold">ThiagoPomo</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger
            asChild
            className={
              "flex items-center hover:bg-white/20 hover:text-none cursor-pointer justify-center gap-3 bg-[rgba(255,255,255,0.2)] text-[1.7rem] w-[10rem] h-[4rem] rounded-[0.5rem] border shadow-xs  hover:text-gray-300 dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
            }
          >
            <button>
              {<SettingIcon />}
              {"SETTING"}
            </button>
          </DialogTrigger>
          <DialogContent
            className="
                overflow-y-auto scroll-area
                h-[92vh]
                rounded-2xl"
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
                className={
                  "w-[8rem] h-[4rem] my-[3rem] mr-[2rem] hover:bg-gray-500 rounded-2xl bg-gray-400 text-[#FFF] cursor-pointer text-[1.5rem]"
                }
                value={"OK"}
                onClick={() => setOpen(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
        <NavLink to="/signin">
          <Btn
            className={
              "flex items-center justify-center gap-3 bg-[rgba(255,255,255,0.2)] text-[1.7rem] w-[10rem] h-[4rem] rounded-[0.5rem] font-normal cursor-pointer hover:text-gray-300"
            }
            value={"SIGN IN"}
            img={<SignInIcon />}
          />
        </NavLink>
      </div>
      <div className="flex items-center w-[58rem] bg-gray-200 h-[0.1rem] mt-[2rem]">
        <Progress value={pomodoroContext?.progress} className="w-[100%]" />
      </div>
      <Outlet />
    </>
  );
}
export default Header;
