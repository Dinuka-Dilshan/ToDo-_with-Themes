import { useTheme } from "../context/ThemeProvider";


const Board = ({ children }) => {
  const isDark = useTheme();

  const dynamicStyles = {
    backgroundColor: isDark ? "#23272F" : "",
    minHeight:'100vh'
  };

  return <div style={dynamicStyles} >{children}</div>;
};

export default Board;
