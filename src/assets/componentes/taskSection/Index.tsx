import DefaultTitle from "../defaultTitle/Index";
import SectionTitle from "../sectionTitle";
import { RiTaskFill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Switch } from "@/components/ui/switch";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function TaskSection() {
  return (
    <div className="flex flex-col px-[1rem] w-[40rem] m-auto bg-[#FFF]">
      <div>
        <SectionTitle img={<RiTaskFill />} value={"TASK"} />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-[1rem] mb-[3rem]">
          <DefaultTitle value={"Auto Check Tasks"} />
          <Tooltip>
            <TooltipTrigger>
              <BsFillInfoCircleFill size={15} className="text-gray-400" />;
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[1rem]">Select your Auto Check Tasks</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Switch />
      </div>
      <div className="flex justify-between  mb-[2rem]">
        <div className="flex items-center gap-[1rem]">
          <DefaultTitle value={"Check to Bottom"} />
          <Tooltip>
            <TooltipTrigger>
              <BsFillInfoCircleFill size={15} className="text-gray-400" />;
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[1rem]">Select your Check to Bottom</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Switch />
      </div>
      <div className="w-[38rem] bg-gray-200 h-[0.1rem] mt-[2rem]"></div>
    </div>
  );
}

export default TaskSection;
