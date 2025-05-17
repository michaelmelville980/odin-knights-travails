const knightMoves = function (start = [], end = []) {
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

  let queue = [{ position: start, path: [start] }];

  while (queue.length > 0) {
    let entry = queue.shift();

    if (entry.position[0] === end[0] && entry.position[1] === end[1]) {
      return entry.path;
    }

    for (const [dx, dy] of allMovements) {
      const futureMovement = [entry.position[0] + dx, entry.position[1] + dy];
      if (
        futureMovement[0] <= 7 &&
        futureMovement[0] >= 0 &&
        futureMovement[1] <= 7 &&
        futureMovement[1] >= 0
      ) {
        const newPath = entry.path.concat([futureMovement]);
        queue.push({position: futureMovement, path: newPath});
      }
    }
  }
};

console.log(knightMoves([0,0],[6,4]));
