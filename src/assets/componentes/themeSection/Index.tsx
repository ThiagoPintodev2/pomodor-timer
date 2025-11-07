import { BiSolidDownArrow } from "react-icons/bi";
import DefaultTitle from "../defaultTitle/Index";
import DropdownMenuOption from "../dropdownMenuOpiton/Index";
import SectionTitle from "../sectionTitle";
import { IoColorPalette } from "react-icons/io5";

function ThemeSection() {
  return (
    <div className="flex flex-col px-[1rem] w-[40rem] m-auto bg-[#FFF]">
      <div>
        <SectionTitle img={<IoColorPalette />} value={"THEME"} />
        <div className="flex items-center justify-between">
          <DefaultTitle value={"Color Themes"} />
          <div className="flex gap-4">
            <div className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-[#54f14b]"></div>
            <div className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-[#c566d6]"></div>
            <div className="w-[2.5rem] h-[2.5rem] rounded-[0.5rem] bg-[#496af3]"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[2.5rem]">
        <DefaultTitle value={"Hour Format"} />
        <DropdownMenuOption values={['24-hour', '12-hour']} valueDefault={'24-hour'} img={<BiSolidDownArrow />} />
      </div>
    </div>
  );
}

export default ThemeSection;
