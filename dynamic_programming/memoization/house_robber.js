const house_robber = (arr) => {
  let dp = [];
  dp[0] = 0;
  dp[1] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + arr[i]);
  }
  return dp[arr.length];
};

console.log(house_robber([5, 3, 4, 11, 2]));
