/* Chess board is 7x7 and is represented by [x,y] coordinates where (x,y >= 0 && x,y <= 7)
 * Knight movement could be represented via 8 different movements (e.g., [x+1, y+2], etc.)
 * Each move would need to be checked to make sure it stays in [x,y] coordinates
 */
const knightMoves = function (start = [3, 3], end = [4, 5]) {
  /* Generating All Possible Movements (e.g., [1,2] = Up 1, Right 2) */
  const allMovements = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  /* Store Movement Paths */
  let movementsQueue = [[3, 3]];

  /* Checking Movement Paths (BFS) until optimal path found */
  while (movementsQueue > 0) {
    for (let i = 0; i < allMovements.length; i++) {
      /* Generates Movement */
      const [dx, dy] = allMovements[i];
      const x = start[0] + dx;
      const y = start[1] + dy;

      /* Checks if Movement is Valid (within Board) */
      if (x <= 7 || x >= 0 || y <= 7 || y >= 0) {
        movementsQueue;
      }
    }
  }

  const moveOne = [start[0] + 1, start[1] + 2];
};
