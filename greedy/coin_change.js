// Time complexity -> O(V) i.e O(n)

let deno = [1, 2, 5, 10, 20, 50, 100, 500, 1000]; // Already Sorted
let n = deno.length;

function findMin(V) {
  // Initialize result
  let ans = [];
  // Traverse through all denomination
  for (let i = n - 1; i >= 0; i--) {
    // Find denominations
    while (V >= deno[i]) {
      V -= deno[i];
      ans.push(deno[i]);
    }
  }
  // Print result
  for (let i = 0; i < ans.length; i++) {
    console.log(" " + ans[i]);
  }
}

console.log(findMin(93));
console.log(findMin(100));
console.log(findMin(3));
