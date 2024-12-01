import styles from "./Square.module.css";

export default function Square({ children }) {
  return <div className={styles.cell}>{children}</div>;
}
