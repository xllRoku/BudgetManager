import { themeContext } from "../context/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
  return useContext(themeContext);
};

export default useTheme;
