// Time Complexity -> O(n)
const linear_search = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linear_search([12, 3, 4, -3, 65, 14], 3));
console.log(linear_search([12, 3, 4, -3, 65, 14], 14));
console.log(linear_search([12, 3, 4, -3, 65, 14], 30));
