import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Children />
    </DarkModeContext.Provider>
  );
};

export default App;

const Children = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: isDarkMode ? "#000" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <h1>useContext</h1>
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? "지금은 다크모드" : "지금은 라이트모드"}
      </button>
    </div>
  );
};
