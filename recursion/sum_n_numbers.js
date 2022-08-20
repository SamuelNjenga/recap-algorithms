const sum = (n) => {
  if (n === 1) {
    return 1;
  }
  return sum(n - 1) + n;
};
console.log("SUM OF Natural numbers upto 10", sum(10));
console.log("SUM OF Natural numbers upto 15", sum(15));
