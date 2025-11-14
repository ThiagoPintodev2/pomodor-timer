import DefaultTitle from "../defaultTitle/Index";
import SectionTitle from "../sectionTitle";
import { FaVolumeUp } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import DropdownMenuOption from "../dropdownMenuOpiton/Index";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

function SoundeSection() {
  const [sliderAlarmSound, setSliderAlarmSound] = useState<number[]>([50]);
  const [sliderTickingSound, setSliderTickingSound] = useState<number[]>([50]);

  return (
    <div className="flex flex-col px-[1rem] pt-[1.5rem] w-[40rem] m-auto bg-[#FFF]">
      <div>
        <SectionTitle img={<FaVolumeUp />} value={"SOUND"} />
        <div className="flex items-center justify-between">
          <DefaultTitle value={"Alarm Sound"} />
          <DropdownMenuOption
            img={<BiSolidDownArrow />}
            values={["Bell", "Bird", "Digital", "Kitchen", "Wood"]}
            valueDefault={"Bell"}
          />
        </div>
        <div className="flex justify-end my-[2.5rem] items-center">
          <div className="text-[1.7rem] text-gray-400 mr-[1.8rem]">
            {`${sliderAlarmSound} ` + "%"}
          </div>
          <Slider
            className="w-[13rem] h-[2rem]"
            onValueChange={(e) => setSliderAlarmSound(e)}
            defaultValue={[50]}
            max={100}
            step={1}
          />
        </div>
        <SectionTitle img={<FaVolumeUp />} value={"SOUND"} />
        <div className="flex items-center justify-between">
          <DefaultTitle value={"Ticking Sound"} />
          <DropdownMenuOption
            values={["None", "Ticking fast", "Ticking Slow", "Ticking Noise"]}
            valueDefault={"None"}
            img={<BiSolidDownArrow />}
          />
        </div>
        <div className="flex justify-end my-[2.5rem] items-center">
          <div className="text-[1.7rem] text-gray-400 mr-[1.8rem]">
            {`${sliderTickingSound} ` + "%"}
          </div>
          <Slider
            className="w-[13rem] h-[2rem]"
            onValueChange={(e) => setSliderTickingSound(e)}
            defaultValue={[50]}
            max={100}
            step={1}
          />
        </div>
        <div className="w-[38rem] bg-gray-200 h-[0.1rem] mt-[2rem]"></div>
      </div>
    </div>
  );
}

export default SoundeSection;
