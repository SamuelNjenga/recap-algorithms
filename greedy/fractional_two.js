const ItemValue = function (wt, val) {
  this.wt = wt;
  this.val = val;
  this.ratio = val / wt;
};

const getMaxValue = (wt, val, capacity) => {
  //Create a new temp array
  let iVal = new Array(wt.length);

  //Store each item along with its weight
  for (let i = 0; i < wt.length; i++) {
    iVal[i] = new ItemValue(wt[i], val[i]);
  }

  // sorting items by value in descending order;
  iVal = iVal.sort((a, b) => b.ratio - a.ratio);

  //Store the result
  let totalValue = 0;

  //Iterate all the item values
  for (let i of iVal) {
    let curWt = i.wt;
    let curVal = i.val;

    if (capacity - curWt >= 0) {
      // this weight can be picked while
      capacity = capacity - curWt;
      totalValue += curVal;
    } else {
      // item cant be picked whole
      let fraction = capacity / curWt;
      totalValue += curVal * fraction;
      capacity = capacity - curWt * fraction;
      break;
    }
  }

  return totalValue;
};

console.log(getMaxValue([10, 5, 14, 20], [60, 40, 70, 80], 28));
console.log(getMaxValue([4, 2, 1, 10, 2], [12, 2, 1, 4, 1], 15));
