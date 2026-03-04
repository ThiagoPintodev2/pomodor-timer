import DefaultTitle from "../DefaultTitle/index";
import SectionTitle from "../SectionTitle";
import { FaVolumeUp } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import DropdownMenuOption from "../DropdownMenuOpiton/index";
import { Slider } from "@/components/ui/slider";
import { useContext, useEffect, useRef, useState } from "react";
import alarmDigital from "@/assets/media/alarm-digital.mp3";
import alarmKitchen from "@/assets/media/alarm-kitchen.mp3";
import type { alarmTypes } from "@/componentes/SoundSection/soundSection";
import { PomodoroContext } from "@/contexts/pomodoroContext/PomodoroContext";
import {
  getStoredPomodoroState,
  setStoredPomodoroState,
} from "@/utils/pomodoroStorage";

function SoundeSection() {
  const pomodoroContext = useContext(PomodoroContext);
  const stored = getStoredPomodoroState();
  const [sliderAlarmSound, setSliderAlarmSound] = useState<number[]>(
    stored.sliderAlarmSound,
  );

  useEffect(() => {
    setStoredPomodoroState({
      sliderAlarmSound,
    });
  }, [sliderAlarmSound]);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const alarms = ["Digital", "Kitchen"];

  const onAlarmTypeChange = (type: alarmTypes) => {
    pomodoroContext?.setAlarmType(type);
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
            valueDefault={pomodoroContext?.alarmType}
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
            value={sliderAlarmSound}
            max={100}
            step={1}
          />
        </div>
        <audio ref={audioRef} preload="auto">
          <source src={alarmDigital} type="audio/mpeg" />
        </audio>
        <div className="w-[38rem] bg-gray-200 h-[0.1rem] mt-[2rem] max-[435px]:w-[85vw]"></div>
      </div>
    </div>
  );
}
export default SoundeSection;
