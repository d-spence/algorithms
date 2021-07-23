
const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.shift();
  const less = arr.filter(n => n <= pivot);
  const more = arr.filter(n => n > pivot);

  return [...quicksort(less), pivot, ...quicksort(more)];
}

const testArr1 = [33, 15, 10];
const testArr2 = [12, 3, 1, 7, 11, 19, 42, 0];
console.log(quicksort(testArr1));
console.log(quicksort(testArr2));

module.exports = quicksort;