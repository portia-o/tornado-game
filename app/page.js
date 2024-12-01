"use client";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Board from "../components/Board/Board";
import GameOver from "@/components/GameOver/GameOver";
import React from "react";

export default function Home() {
  let NUM_ROWS = 4;
  let NUM_COLS = 4;

  if (NUM_ROWS > 9) {
    NUM_ROWS = 9;
  }

  if (NUM_COLS > 9) {
    NUM_COLS = 9;
  }

  const [collision, setCollision] = React.useState(false);
  const [tornado, setTornado] = React.useState([0, 0]);
  const [rainier, setRainier] = React.useState([NUM_ROWS - 1, NUM_COLS - 1]);

  function resetGame() {
    setCollision(false);
    setTornado([0, 0]);
    setRainier([NUM_ROWS - 1, NUM_COLS - 1]);
  }

  if (collision) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <GameOver resetGame={resetGame} />
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {collision ? null : <Header />}
        <Board
          collision={collision}
          setCollision={setCollision}
          rainier={rainier}
          setRainier={setRainier}
          tornado={tornado}
          setTornado={setTornado}
          rows={NUM_ROWS}
          columns={NUM_COLS}
        />
      </main>
    </div>
  );
}
