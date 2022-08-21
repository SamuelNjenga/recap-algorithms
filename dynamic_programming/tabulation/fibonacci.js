// Time complexity -> O(n)
const fibonacci = (n) => {
  const fib_array = [];
  fib_array[0] = 0;
  fib_array[1] = 1;
  for (let i = 2; i <= n; i++) {
    fib_array[i] = fib_array[i - 1] + fib_array[i - 2];
  }
  return fib_array[n];
};

console.log(fibonacci(9));
