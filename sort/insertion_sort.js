// Time complexity -> O(n)
const insertion_sort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let number_to_insert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > number_to_insert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = number_to_insert;
  }

  return arr;
};
console.log(insertion_sort([12, 4, -2]));
console.log(insertion_sort([12, 4, -2, 4, 89, 9]));
