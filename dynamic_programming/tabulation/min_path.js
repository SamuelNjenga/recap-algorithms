const array = [
  [1, 4, 3, 1],
  [5, 3, 8, 2],
  [7, 1, 9, 3],
  [8, 6, 3, 2],
];
console.log("M", array.length - 1);
console.log("N", array[0].length - 1);
let minPathSum = function (grid) {
  const dp = [];
  const m = grid.length - 1;
  const n = grid[0].length - 1;
  for (i = m; i >= 0; i--) {
    dp[i] = [];
    for (j = n; j >= 0; j--) {
      const right = j === n ? Infinity : dp[i][j + 1];
      const bottom = i === m ? Infinity : dp[i + 1][j];
      dp[i][j] =
        grid[i][j] +
        (right == Infinity && bottom == Infinity ? 0 : Math.min(right, bottom));
    }
  }
  return dp[0][0];
};
console.log(minPathSum(array));
