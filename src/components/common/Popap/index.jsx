import styles from "./style.module.css";

export default function Popap({ error, setError }) {
  return (
    <>
      <div className={styles.overlay}>
        <span
          className={styles.closebtn}
          onClick={(e) => {
            setError("");
          }}
        >
          &times;
        </span>
        <div className={styles.overlayContent}>
          <span>{error}</span>
        </div>
      </div>
    </>
  );
}
