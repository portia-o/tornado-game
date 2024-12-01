import styles from "./GameOver.module.css";

export default function GameOver({ resetGame }) {
  return (
    <form
      className={styles.gameoverForm}
      onSubmit={(event) => {
        event.preventDefault();
        resetGame();
      }}
    >
      <h1 className={styles.gameover}>Game Over</h1>
      <button className={styles.gameoverButton}>Play again</button>
    </form>
  );
}
