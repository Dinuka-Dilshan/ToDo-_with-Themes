import { useReducer, useState } from "react";
import "./App.css";
import Board from "./components/Board";
import FloatToggle from "./components/FloatToggle";
import Header from "./components/Header";
import Input from "./components/Input";
import Item from "./components/Item";
import ThemeProvider from "./context/ThemeProvider";

import deleteSound from '../src/audio/delete.mp3';
import sendSound from '../src/audio/send.mp3';

export const ACTIONS = {
  TOGGLE: "toogle",
  DELETE: "delete",
  ADD: "add",
};


console.log('call')

const reducer = (state, action) => {

  switch (action.type) {
    case ACTIONS.ADD:
      new Audio(sendSound).play();
      return [...state, { text: action.payload.text, isDone: false }];
    case ACTIONS.DELETE:
      new Audio(deleteSound).play();
      return state.filter((item, index) => index !== action.payload.id);
    case ACTIONS.TOGGLE:
      return state.map((item, index) => {
        if (index === action.payload.id) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [newText, setNewText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { text: newText } });
    setNewText("");
  };

  return (
    <ThemeProvider>
      <Board>
        <FloatToggle />
        <Header text={"to do list"} caps />
        <form onSubmit={submitHandler}>
          <Input value={newText} setValue={setNewText} />
        </form>

        <div className="board">
          {state.map((item, index) => (
            <Item
              key={index}
              id={index}
              text={item.text}
              isDone={item.isDone}
              dispatch={dispatch}
            />
          ))}
        </div>
      </Board>
    </ThemeProvider>
  );
}

export default App;
