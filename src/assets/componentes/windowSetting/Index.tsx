import SoundeSection from "../soundSection/Index";
import TaskSection from "../taskSection/Index";
import ThemeSection from "../themeSection/Index";
import TimerSection from "../timerSection/Index";

function WindowSetting() {
  return (
    <span className="absolute max-h-[100vh] justify-self-center top-0">
      <div className="flex flex-col rounded-t-[1.1rem] h-[100%] bg-[#FFF] mt-[2rem] m-auto items-center w-[40rem]">
        <p className="text-[2rem] py-[1.5rem] text-[gray]">SETTING</p>
      </div>
      <div>
        <TimerSection />
        <TaskSection />
        <SoundeSection />
        <ThemeSection />
      </div>
    </span>
  );
}

export default WindowSetting;
