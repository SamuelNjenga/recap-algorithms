// Time complexity -> O(n)
let maximumUnits = function (boxTypes, truckSize) {
  let noOfUnits = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let row = 0; row < boxTypes.length; row++) {
    const noOfBoxes = boxTypes[row][0];
    const unitPerBoxes = boxTypes[row][1];
    if (truckSize > noOfBoxes) {
      noOfUnits += noOfBoxes * unitPerBoxes;
      truckSize -= noOfBoxes;
    } else {
      noOfUnits += truckSize * unitPerBoxes;
      return noOfUnits;
    }
  }

  return noOfUnits;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
);
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
