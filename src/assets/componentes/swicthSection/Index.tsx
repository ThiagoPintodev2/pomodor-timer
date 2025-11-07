import { Switch } from "@/components/ui/switch";
import DefaultTitle from "../defaultTitle/Index";
import InputConfiguration from "../inputConfiguration/Index";

function 
SwitchSection() {
  return (
    <div className="flex flex-col my-[2rem] gap-[3rem]">
      <div className="flex items-center justify-between">
            <DefaultTitle value={"Auto Start Breaks"} />
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <DefaultTitle value={"Auto Start Pomodoros"} />
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <DefaultTitle value={"Long Breack Interval"} />
           <InputConfiguration className="w-[6.5rem] h-[3.5rem] placeholder:text-[1.6rem] bg-gray-200" placeholder={'4'} />
          </div>
    </div>
  )
}

export default SwitchSection
