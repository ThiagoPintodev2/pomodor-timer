import DefaultTitle from "../defaultTitle/Index";
import SectionTitle from "../sectionTitle";
import { FaVolumeUp } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import DropdownMenuOption from "../dropdownMenuOpiton/Index";
import { Slider } from "@/components/ui/slider";
import { useRef, useState } from "react";
import alarmDigital from "@/assets/media/alarm-digital.mp3";
import alarmKitchen from "@/assets/media/alarm-kitchen.mp3";
import type { alarmTypes } from "./soundSection";

function SoundeSection() {
  const [sliderAlarmSound, setSliderAlarmSound] = useState<number[]>([50]);
  const [sliderTickingSound, setSliderTickingSound] = useState<number[]>([50]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const alarms = ["Digital", "Kitchen"];
  const [alarmType, setAlarmType] = useState<alarmTypes>("Digital");

  const onAlarmTypeChange = (type: alarmTypes) => {
    setAlarmType(type);
    if (audioRef.current) {
      if (type === "Digital") {
        audioRef.current.src = alarmDigital;
      } else if (type === "Kitchen") {
        audioRef.current.src = alarmKitchen;
      }
      audioRef.current.load();
      audioRef.current.volume = sliderAlarmSound[0] / 100;
      audioRef.current.play();
    }
  };

  return (
    <div
      className={`flex flex-col px-[1rem] pt-[1.5rem] w-[40rem] m-auto max-[435px]:w-[90vw]`}
    >
      <div>
        <SectionTitle img={<FaVolumeUp />} value={"SOUND"} />
        <div className="flex items-center justify-between">
          <DefaultTitle value={"Alarm Sound"} />
          <DropdownMenuOption
            img={<BiSolidDownArrow />}
            values={alarms}
            valueDefault={alarmType}
            onChange={onAlarmTypeChange}
            alarms={alarms}
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
        <audio ref={audioRef} preload="auto">
          <source src={alarmDigital} type="audio/mpeg" />
        </audio>
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
        <div className="w-[38rem] bg-gray-200 h-[0.1rem] mt-[2rem] max-[435px]:w-[85vw]"></div>
      </div>
    </div>
  );
}
export default SoundeSection;
