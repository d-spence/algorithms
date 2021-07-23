// sum of array using a for loop
const sum = (arr) => {
  let total = 0;
  arr.forEach(n => {
    total += n;
  });
  return total;
}

// sum of array using recursive function
const recursiveSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const first = arr.shift();
  return first + recursiveSum(arr);
}

const testArr = [2, 4, 6];
// console.log(sum(testArr));
console.log(recursiveSum(testArr));