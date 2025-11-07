import DefaultTitle from "../defaultTitle/Index";
import SectionTitle from "../sectionTitle"
import { FaVolumeUp } from 'react-icons/fa';
import { BiSolidDownArrow } from 'react-icons/bi';
import DropdownMenuOption from "../dropdownMenuOpiton/Index";
import { Slider } from "@/components/ui/slider"
import { useState } from "react";

function SoundeSection() {

  const [ sliderVolume, setSliderVolume ] = useState<number[]>([])

  return (
    <div className="flex flex-col px-[1rem] w-[40rem] m-auto bg-[#FFF]">
       <div>
            <SectionTitle img={<FaVolumeUp />} value={"SOUND"} />
            <div className="flex items-center justify-between">
                <DefaultTitle value={"Alarm Sound"} />
                <DropdownMenuOption img={<BiSolidDownArrow />} values={['Bell', 'Bird', 'Digital', 'Kitchen', 'Wood']} valueDefault={'Bell'} />
            </div>
            <div className="flex justify-end my-[2.5rem]">
              <Slider className="w-[13rem] h-[2rem]" onValueChange={(e) => setSliderVolume(e)} defaultValue={[80]} max={100} step={1} />
                <div>
                  {
                    sliderVolume
                  }
                </div>
            </div>
            <SectionTitle img={<FaVolumeUp />} value={"SOUND"} />
            <div className="flex items-center justify-between">
                <DefaultTitle value={"Ticking Sound"} />
                <DropdownMenuOption  values={['None', 'Ticking fast', 'Ticking Slow', 'Ticking Noise']} valueDefault={'None'} img={<BiSolidDownArrow />} />
            </div>
            <div className="flex justify-end my-[2.5rem]">
              <Slider className="w-[13rem] h-[2rem]" />
            </div>
       </div>
    </div>
  )
}

export default SoundeSection
