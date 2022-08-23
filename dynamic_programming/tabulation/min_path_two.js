let minPathSum = function (grid) {
  let m = grid.length;
  let n = (grid[0] || []).length;
  let dp = Array(m);
  let left = 0;
  let top = 0;

  if (!m || !n) return 0;

  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (let j = 0; j < n; j++) {
      top = i === 0 ? Number.MAX_SAFE_INTEGER : dp[i - 1][j];
      left = j === 0 ? Number.MAX_SAFE_INTEGER : dp[i][j - 1];
      dp[i][j] = grid[i][j] + (i === 0 && j === 0 ? 0 : Math.min(left, top));
    }
  }

  return dp[m - 1][n - 1];
};

console.log(
  minPathSum([
    [1, 4, 3, 1],
    [5, 3, 8, 2],
    [7, 1, 9, 3],
    [8, 6, 3, 2],
  ])
);
