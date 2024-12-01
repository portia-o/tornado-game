import { checkBounds } from "./checkBounds";

export function movePlayer(oldPosition, event, rows, columns) {
  let newPosition = [...oldPosition];
  switch (event.key) {
    case "w":
      newPosition[0] -= 1;
      break;
    case "a":
      newPosition[1] -= 1;
      break;
    case "s":
      newPosition[0] += 1;
      break;
    case "d":
      newPosition[1] += 1;
      break;
    case "ArrowUp":
      newPosition[0] -= 1;
      break;
    case "ArrowLeft":
      newPosition[1] -= 1;
      break;
    case "ArrowDown":
      newPosition[0] += 1;
      break;
    case "ArrowRight":
      newPosition[1] += 1;
      break;
  }
  const nextPosition = checkBounds(oldPosition, newPosition, rows, columns);
  return nextPosition;
}
