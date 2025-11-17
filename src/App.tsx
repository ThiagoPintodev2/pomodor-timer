import { useState } from "react";
import Header from "./assets/componentes/header/Index";
import Timer from "./components/timer";
import { ThemePomodoroContext } from "./contexts/ThemePomodoro/ThemePomodoro";

function App() {
  const [actualTheme, setActualTheme] = useState<string>("#C66A6A");
  const [valueTime, setValueTime] =  useState<number>(0)

  return (
    <div
      className="flex flex-col items-center h-[100vh]"
      style={{ backgroundColor: actualTheme }}
    >
      <ThemePomodoroContext.Provider value={{ actualTheme, setActualTheme, valueTime, setValueTime }} >
        <Header />
        <Timer />
      </ThemePomodoroContext.Provider>
    </div>
  );
}

export default App;
