import styles from "./FloatToggle.module.css";

import { WiDaySunny } from "react-icons/wi";
import { MdNightsStay } from "react-icons/md";
import { useTheme, useThemeToggle } from "../context/ThemeProvider";

const FloatToggle = () => {
  const isDark = useTheme();
  const toggle = useThemeToggle();


  return (
    <div className={styles.wrapper} onClick={toggle}>
      {isDark ? <WiDaySunny size={30} /> : <MdNightsStay size={30} />}
    </div>
  );
};

export default FloatToggle;
