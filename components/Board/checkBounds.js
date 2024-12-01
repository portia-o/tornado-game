const oobSound = new Audio("/wall_hit.wav");

export const checkBounds = (prev, next, rows, columns) => {
  if (next[0] > rows - 1 || next[0] < 0) {
    next[0] = prev[0];
  }
  if (next[1] > columns - 1 || next[1] < 0) {
    next[1] = prev[1];
  }

  return next;
};
