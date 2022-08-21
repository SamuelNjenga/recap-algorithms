const fibonacci = (n) => {
  let fact = [];
  if (n === 0 || n === 1) return n;
  if (fact[n] !== undefined) {
    return fact[n];
  } else {
    fact[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return fact[n];
  }
};
console.log(fibonacci(9));
