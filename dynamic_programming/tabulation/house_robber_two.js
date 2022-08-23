function maxLoot(hval, n) {
  if (n == 0) return 0;

  let value1 = hval[0];
  if (n == 1) return value1;

  let value2 = Math.max(hval[0], hval[1]);
  if (n == 2) return value2;

  // contains maximum stolen value at the end
  let max_val = 0;

  // Fill remaining positions
  for (let i = 2; i < n; i++) {
    max_val = Math.max(hval[i] + value1, value2);
    value1 = value2;
    value2 = max_val;
  }

  return max_val;
}

console.log(maxLoot([5, 3, 4, 11, 2], 4));
