import { useState } from "react";
import styles from "./style.module.css";

export default function Header({ toDo, setToDo }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>My ToDo List</h1>
        <input
          type="text"
          className={styles.inputText}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <button
          className={styles.addButton}
          onClick={(e) => {
            inputValue ? 
            setToDo([...toDo, { title: inputValue, status: false }]) : setToDo([...toDo]);
            setInputValue('')
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
