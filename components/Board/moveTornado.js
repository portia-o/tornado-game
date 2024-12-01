import { checkBounds } from "./checkBounds";

export function moveTornado(prevPosition, rows, columns) {
  let newPosition = [...prevPosition];
  const randomX = Math.random() < 0.5 ? -1 : 1;
  const randomY = Math.random() < 0.5 ? -1 : 1;
  newPosition[0] = prevPosition[0] + randomX;
  newPosition[1] = prevPosition[1] + randomY;

  const nextPosition = checkBounds(prevPosition, newPosition, rows, columns);
  return nextPosition;
}
