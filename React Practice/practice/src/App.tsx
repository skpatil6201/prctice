import React, { useState } from "react";
import { ThemeContext, ThemeType } from "./ThemeContext";
import Child from "./assets/react.svg";

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h1>useContext with TypeScript</h1>
      <Child />
    </ThemeContext.Provider>
  );
};

export default App;
