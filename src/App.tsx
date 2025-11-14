import { useState  } from "react";
import Header from "./assets/componentes/header/Index";
import Timer from "./components/timer";
import { ThemePomodoroContext } from "./contexts/ThemePomodoro/ThemePomodoro";

function App() {

    const [actualTheme, setActualTheme] = useState<string>('#C66A6A')
  
  return (
    <div className="flex flex-col items-center h-[100vh]"
    style={{backgroundColor: actualTheme}}>
      <ThemePomodoroContext.Provider value={{actualTheme, setActualTheme}} >
        <Header />
      </ThemePomodoroContext.Provider>
      <Timer />
    </div>
  );
}

export default App;
