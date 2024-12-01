"use client";
import Square from "../Square/Square";
import styles from "./Board.module.css";
import React from "react";
import { movePlayer } from "./movePlayer";
import { moveTornado } from "./moveTornado";

export default function Board({
  collision,
  setCollision,
  rainier,
  setRainier,
  tornado,
  setTornado,
  rows = 4,
  columns = 4,
}) {
  const row = Array(columns).fill(0);
  const grid = Array(rows)
    .fill(0)
    .map(() => {
      return [...row];
    });

  // Move the tornado
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTornado((prevPosition) => moveTornado(prevPosition, rows, columns));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [columns, rows]);

  // Move the player
  React.useEffect(() => {
    function updatePlayer(event) {
      setRainier(movePlayer(rainier, event, rows, columns));
    }

    // Add the event listener for keydown
    window.addEventListener("keydown", updatePlayer);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", updatePlayer);
    };
  }, [columns, rainier, rows]);

  // Checking/setting collision
  React.useEffect(() => {
    const isCollision = rainier[0] === tornado[0] && rainier[1] === tornado[1];
    if (isCollision) {
      setCollision(true);
    }
  }, [rainier, tornado]);

  return (
    <div
      className={styles.board}
      style={{
        gridTemplateColumns: `repeat(${columns}, 100px)`,
        gridTemplateRows: `repeat(${rows}, 100px)`,
      }}
    >
      {grid.map((row, i) => {
        return row.map((_, j) => {
          const currentPosition = [i, j];

          const isTornado =
            currentPosition[0] === tornado[0] &&
            currentPosition[1] === tornado[1];

          const isRainier =
            currentPosition[0] === rainier[0] &&
            currentPosition[1] === rainier[1];

          return (
            <Square key={1 + 4 * i + j}>
              {isTornado === true ? "🌪️" : null}
              {isRainier === true ? "🛻" : null}
            </Square>
          );
        });
      })}
    </div>
  );
}

// DONE Tornado motion
// DONE Show player
// DONE Move player w/ keys
// DONE Collision detection > Game over
// Beep if player tries to move off screen
// DONE Play again button on Game over screen
// DONE Game over screen
// DONE Variable board size
// Start screen w/ choice of board sizes
