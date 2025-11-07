import InputConfiguration from "../inputConfiguration/Index";
import DefaultTitle from "../defaultTitle/Index";
import SectionTitle from "../sectionTitle";
import { CgTimer } from "react-icons/cg";
import SwitchSection from "../swicthSection/Index";

function TimerSection() {
  return (
    <div>
      <div className="flex flex-col px-[1rem] w-[40rem] m-auto bg-[#FFF]">
        <div>
          <SectionTitle img={<CgTimer />} value={"TIMER"} />
        </div>
        <DefaultTitle value={"Time (minutes)"} />
        <div className="flex gap-[2rem] justify-between mt-[0.5rem]">
          <InputConfiguration className={"w-[9rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200"} label={"Pomodoro"} placeholder={"25"} />
          <InputConfiguration className={"w-[9rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200"} label={"Short breake"} placeholder={"5"} />
          <InputConfiguration className={"w-[9rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200"} label={"Long breack"} placeholder={"15"} />
        </div>
        <SwitchSection />
      </div>
    </div>
  );
}

export default TimerSection;
