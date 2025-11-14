import { BiSolidDownArrow } from "react-icons/bi";
import DefaultTitle from "../defaultTitle/Index";
import DropdownMenuOption from "../dropdownMenuOpiton/Index";
import SectionTitle from "../sectionTitle";
import { IoColorPalette } from "react-icons/io5";
import Btn from "../button/Index";
//import { FaCheck } from "react-icons/fa6";
import { useContext } from "react";
import { ThemePomodoroContext } from "@/contexts/ThemePomodoro/ThemePomodoro";

function ThemeSection() {

  const theme = useContext(ThemePomodoroContext)

  const handleColorTheme = (color: string) => {
    theme?.setActualTheme(color)
  };

  const colorThemes = [
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
  ];

  return (
    <div className="flex flex-col px-[1rem] w-[40rem] m-auto bg-[#FFF] rounded-b-[1.1rem]">
      <div>
        <div className="flex justify-items-start">
          <SectionTitle img={<IoColorPalette />} value={"THEME"} />
          <div className="flex items-center ml-[2rem] gap-[1rem]">
            <p className="text-[1.5rem] font-bold">
              Cor Ativa:
            </p>
            <div className="w-[3rem] h-[3rem] rounded-[20%]"
              style={{backgroundColor: theme?.actualTheme}}
              ></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <DefaultTitle value={"Color Themes"} />
          <div className="flex gap-4">
            {colorThemes.map((item) => (
              <Btn
                className="w-[3.5rem] h-[3.5rem] border rounded-[50%] cursor-pointer"
                style={{ backgroundColor: item.color }}
                value={""}
                onClick={() => handleColorTheme(item.color)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-[2.5rem] ">
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
