import DefaultTitle from "../DefaultTitle/index";
import SectionTitle from "../SectionTitle";
import { IoColorPalette } from "react-icons/io5";
import PomodoroThemeSection from "../PomodoroThemeSection/index";
import LongbreakThemeSection from "../LongBreakThemeSection/index";
import ShortBreakTheme from "../ShortBreakThemeSection/index";

function ThemeSection() {
  return (
    <div
      className={`flex flex-col px-[1rem] w-[40rem] m-auto bg-[#FFF] rounded-b-[1.1rem] max-[435px]:w-[90vw]`}
    >
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
      <div className="flex items-center justify-between my-[2.5rem]"></div>
    </div>
  );
}

export default ThemeSection;
