import { useState } from "react";
import styles from "./style.module.css";

export default function Body({ toDo, setToDo, setError }) {
  const [isCheck, setIsCheck] = useState(-1);
  const [data, setData] = useState("");

  return (
    <>
      <div className={styles.main}>
        <ul className={styles.ulUI}>
          {toDo.map((val, i) => {
            return (
              <li
                key={i}
                className={val?.status ? styles.checked : ""}
                onClick={(e) => {
                  e.stopPropagation();
                  setToDo(
                    toDo.map((item, ind) =>
                      ind === i ? { ...item, status: !item.status } : item
                    )
                  );
                }}
              >
                {isCheck === i ? (
                  <input
                    type="text"
                    className={styles.input}
                    value={data}
                    onChange={(e) => {
                      setData(e.target.value);
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                ) : (
                  val.title
                )}
                <span
                  className={isCheck === i ? styles.save : styles.edit}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isCheck === i) {
                      setIsCheck(-1);
                      if (data.trim() !== "") {
                        setToDo(
                          toDo.map((item, ind) =>
                            ind === i ? { ...item, title: data } : item
                          )
                        );
                      } else {
                        setError("The text must not be empty.");
                      }
                      setData("");
                    } else {
                      setIsCheck(i);
                      setData(val.title);
                    }
                  }}
                >
                  {isCheck === i ? "Save" : "Edit"}
                </span>
                <span
                  className={styles.close}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (val.status === true) {
                      setToDo(toDo.filter((_, ind) => ind !== i));
                    } else {
                      setError("At first you must check your to do.");
                    }
                  }}
                >{`\u00D7`}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
