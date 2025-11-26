import { useContext } from "react";
import Btn from "../button/Index";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";

function ShortBreakTheme() {
  const pomodoroContext = useContext(PomodoroContext);

  const allColorThemes = [
    {
      id: 1,
      color: "#a1cc70",
    },
    {
      id: 2,
      color: "#c566d6",
    },
    {
      id: 3,
      color: "#496af3",
    },
    {
      id: 4,
      color: "#F24F3A",
    },
    {
      id: 5,
      color: "#F2A03A",
    },
    {
      id: 6,
      color: "#c7bb75",
    },
    {
      id: 7,
      color: "#d1796b",
    },
    {
      id: 8,
      color: "#4a9ef2",
    },
  ];

  return (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger>
          <Btn
            className="w-[3.5rem] h-[3.5rem] border rounded-[50%] cursor-pointer"
            value={""}
            style={{ backgroundColor: pomodoroContext?.themes.shortBreak }}
          />
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="flex w-[23rem] h-[17rem] justify-center items-center top-[78%] left-[55%]"
        >
          <DialogHeader>
            <DialogTitle className="text-center mt-[-1rem] mb-[1rem] text-[1.5rem]">
              Pick a color for short Break
            </DialogTitle>
            <DialogDescription className="grid grid-flow-col grid-rows-2 gap-3">
              {allColorThemes.map((item) => (
                <Btn
                  className="w-[4.5rem] h-[4.5rem] border rounded-[50%] cursor-pointer"
                  value={""}
                  style={{ backgroundColor: item.color }}
                  onClick={() =>
                    pomodoroContext?.setThemes({
                      ...pomodoroContext.themes,
                      shortBreak: item.color,
                    })
                  }
                />
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ShortBreakTheme;
