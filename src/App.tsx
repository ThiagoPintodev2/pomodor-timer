import { useEffect, useState } from "react";
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
import {
  getStoredPomodoroState,
  setStoredPomodoroState,
} from "./utils/pomodoroStorage";

function App() {
  const stored = getStoredPomodoroState();

  const [titleTimer, setTitleTimer] = useState<string>(stored.titleTimer);
  const [themes, setThemes] = useState<ThemeInterface>(stored.themes);
  const [valuesInputTimer, setValuesInputTimer] = useState<ValueInput>(
    stored.valuesInputTimer
  );
  const [progress, setProgress] = useState<number>(stored.progress);
  const [alarmType, setAlarmType] = useState<string>(stored.alarmType);

  useEffect(() => {
    setStoredPomodoroState({
      titleTimer,
      themes,
      valuesInputTimer,
      progress,
      alarmType,
    });
  }, [titleTimer, themes, valuesInputTimer, progress, alarmType]);

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
