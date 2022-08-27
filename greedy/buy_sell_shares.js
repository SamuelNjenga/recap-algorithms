const buy_sell = (shares) => {
  let profit = 0;
  for (let i = 1; i < shares.length; i++) {
    if (shares[i] > shares[i - 1]) {
      profit += shares[i ] - shares[i - 1];
    }
  }
  return profit;
};

console.log(buy_sell([1,8,7,3,5,2]));