import styles from "./style.module.css";

export default function Body({ toDo, setToDo }) {
  return (
    <>
      <div className={styles.main}>
        <ul className={styles.ulUI}>
          {toDo.map((val, i) => {
            return val.title ? (
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
                {val.title}
                <span
                  className={styles.close}
                  onClick={(e) => {
                    e.stopPropagation();
                    setToDo(toDo.filter((_, ind) => ind !== i));
                  }}
                >{`\u00D7`}</span>
              </li>
            ) : (
              ""
            );
          })}
        </ul>
      </div>
    </>
  );
}
