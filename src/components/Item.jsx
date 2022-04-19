import styles from "./Item.module.css";
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { ACTIONS } from "../App";
import { useTheme } from "../context/ThemeProvider";

const Item = ({ text, isDone, dispatch, id }) => {
  const isDark = useTheme();

  const textStyles = {
    color: isDark ? "#F6F7F9" : isDone ? "#969FAF" : "#087EA4",
    backgroundColor: isDark ? "#313641" : isDone ? "#EFF0F3" : "#E6F7FF",
    textDecoration: isDone ? "line-through" : "none",
    border: isDark ? "none" : "",
  };



  return (
    <div className={styles.wrapper} style={textStyles}>
      <div className={styles.text}>{text}</div>
      <div className={styles.btnWrapper}>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch({ type: ACTIONS.TOGGLE, payload: { id: id } });
          }}
        >
          {isDone ? (
            <MdClose  size={33} color={isDark?'white':'black'}/>
          ) : (
            <MdDone  size={33} color={isDark?'white':'black'} />
          )}
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE, payload: { id: id } });
          }}
        >
          <BsTrash size={30} color={isDark?'white':'black'}/>
        </button>
      </div>
    </div>
  );
};

export default Item;
