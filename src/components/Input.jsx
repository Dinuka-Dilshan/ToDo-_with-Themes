import { useTheme } from "../context/ThemeProvider";
import styles from "./Input.module.css";

const Input = ({ value, setValue }) => {

  const isDark = useTheme();

  const changehandler = (event) => {
    setValue(event.target.value);
  };

  const dynamicStyles = {
    backgroundColor: isDark ? "#313641" : "",
    color:isDark?'#99A1B3':'',
    border:isDark?'none':'',
    outline:isDark?'none':'',
  };

  return (
    <div className={styles.wrapper}>
      <input
      style={dynamicStyles}
        value={value}
        onChange={changehandler}
        placeholder="Add Items"
        className={styles.input}
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Input;
