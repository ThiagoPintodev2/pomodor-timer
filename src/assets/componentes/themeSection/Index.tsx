import { BiSolidDownArrow } from "react-icons/bi";
import DefaultTitle from "../defaultTitle/Index";
import DropdownMenuOption from "../dropdownMenuOpiton/Index";
import SectionTitle from "../sectionTitle";
import { IoColorPalette } from "react-icons/io5";
import PomodoroThemeSection from "../pomodoroThemeSection/Index";
import LongbreakThemeSection from "../longBreakThemeSection/Index";
import ShortBreakTheme from "../shortBreakThemeSection/Index";

function ThemeSection() {

  return (
    <div className={`flex flex-col px-[1rem] w-[40rem] m-auto bg-[#FFF] rounded-b-[1.1rem] max-[435px]:w-[90vw]`}>
      <div>
        <div className="flex justify-items-start">
          <SectionTitle img={<IoColorPalette />} value={"THEME"} />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <DefaultTitle value={"Color Themes"} />
          </div>
          <div className="flex gap-4">
            <PomodoroThemeSection />
            <ShortBreakTheme />
            <LongbreakThemeSection />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-[2.5rem]">
        <DefaultTitle value={"Hour Format"} />
        <DropdownMenuOption
          values={["24-hour", "12-hour"]}
          valueDefault={"24-hour"}
          img={<BiSolidDownArrow />}
        />
      </div>
    </div>
  );
}

export default ThemeSection;
