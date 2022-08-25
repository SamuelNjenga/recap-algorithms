// Time Complexity -> O(n*n)
const solve = (price, i, j, year) => {
  let dp = [];
  dp[i] = [];
  if (i > j) return 0;

  if (i == j) return price[i] * year;
  if (dp[i][j] != undefined) return dp[i][j];

  let left = price[i] * year + solve(price, i + 1, j, year + 1);
  let right = price[j] * year + solve(price, i, j - 1, year + 1);
  return (dp[i][j] = Math.max(left, right));
};

console.log(solve([2, 4, 6, 5], 0, 3, 1));
console.log(solve([2, 4, 6, 2, 5], 0, 4, 1));
