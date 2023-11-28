import { useState } from "react";
import styles from "./style.module.css";

export default function Header({ toDo, setToDo, setError }) {
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
            if (inputValue.trim()) {
              setToDo([...toDo, { title: inputValue, status: false }]);
            } else {
              setError('The text must not be empty.')
              setToDo([...toDo])
            }
            setInputValue('')
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
