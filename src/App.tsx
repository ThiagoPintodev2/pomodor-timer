import {  useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./assets/componentes/header/Index";
import Timer from "./assets/componentes/timer/Index";
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
  const [valuesInputTimer, setValuesInputTimer] = useState<ValueInput>({
    valueIntervalInput: 2,
    pomodoroInput: 5,
    shortBreakInput: 0.1,
    longBreakInput: 0.1,
  });
  const [progress, setProgress] = useState<number>(valuesInputTimer.pomodoroInput * 60);

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
