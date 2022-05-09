import { createContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [changeTheme, setChangeTheme] = useState(false);

  const handleSetChangeTheme = (changeTheme) => {
    setChangeTheme(changeTheme);
  };

  return (
    <themeContext.Provider value={{ changeTheme, handleSetChangeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext };

export default ThemeProvider;
