import {  useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./componentes/Header/index";
import Timer from "./componentes/Timer/index";
import { PomodoroContext } from "./contexts/pomodoroContext/PomodoroContext";
import type {
  ThemeInterface,
  ValueInput,
} from "./contexts/pomodoroContext/PomodoroContextProps";
import LoginArea from "./pages/loginArea/Index";
import CreateAccount from "./pages/createAccount/Index";

function App() {
  const [titleTimer, setTitleTimer] = useState<string>("Pomodoro");
  const [themes, setThemes] = useState<ThemeInterface>({
    pomodoro: "#4a9ef2",
    shortBreak: "green",
    longBreak: "blue",
  });
  const defaultValuesInputTimer: ValueInput = {
    valueIntervalInput: 2,
    pomodoroInput: 0.1,
    shortBreakInput: 0.1,
    longBreakInput: 0.1
  };
  const [valuesInputTimer, setValuesInputTimer] = useState<ValueInput>(
    defaultValuesInputTimer
  );
  const [progress, setProgress] = useState<number>(
    defaultValuesInputTimer.pomodoroInput * 60
  );
  
    const [alarmType, setAlarmType] = useState<string>("Digital");

  return (
    <>
      <div
        className="flex flex-col items-center h-[100vh]"
        style={{
          backgroundColor:
            titleTimer === "Pomodoro"
              ? `${themes.pomodoro}`
              : titleTimer === "Short break"
              ? `${themes.shortBreak}`
              : `${themes.longBreak}`,
        }}
      >
        <BrowserRouter>
          <PomodoroContext.Provider
            value={{
              progress,
              setProgress,
              themes,
              setThemes,
              titleTimer,
              setTitleTimer,
              valuesInputTimer,
              setValuesInputTimer,
              alarmType, 
              setAlarmType
            }}
          >
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<Timer />} />
              </Route>
              <Route path="/signin" element={<LoginArea />} />
              <Route path="/createaccount" element={<CreateAccount />} />
            </Routes>
          </PomodoroContext.Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
