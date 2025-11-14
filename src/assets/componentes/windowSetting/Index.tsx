import SoundeSection from "../soundSection/Index";
import TaskSection from "../taskSection/Index";
import ThemeSection from "../themeSection/Index";
import TimerSection from "../timerSection/Index";

function WindowSetting() {
  return (
    <span>
      <div className="flex flex-col items-center">
        <p className="text-[2rem] text-center py-6 text-gray-500">SETTING</p>
        <div className="w-[38rem] bg-gray-200 h-[0.1rem] mt-[1rem] mb-[2rem]"></div>
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
