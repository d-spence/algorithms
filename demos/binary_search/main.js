const inputNumber = document.querySelector('#input-number');
const stepTimeSelect = document.querySelector('#step-time');
const binarySearchBtn = document.querySelector('#binary-search-btn');
const simpleSearchBtn = document.querySelector('#simple-search-btn');
const resetBtn = document.querySelector('#reset-btn');
const searchGrid = document.querySelector('#search-grid');
const stepsValue = document.querySelector('#steps-value');
const timeValue = document.querySelector('#time-value');
const guessesString = document.querySelector('#guesses-string');

const arrayLength = 100;
const numsArray = Array.from(Array(arrayLength), (n, i) => i + 1); // [1, 2, ..., 99, 100]

let steps = 0;
let timeDelay = 50; // milliseconds between steps
let guesses = []; // holds guess values of a run

const binarySearch = (arr, num) => {
  // Use binary search method to find num within arr; returns index of matching item
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    steps++;
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];
    guesses.push(guess);
    currentGridElem = document.querySelector(`#grid-item-${mid + 1}`);

    if (guess === num) {
      console.log(`${num} found at index ${mid} in ${steps} step(s)`);
      setTimeout(updateGrid, (steps * timeDelay), currentGridElem, 120, steps);
      return mid;
    } else if (guess > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }

    setTimeout(updateGrid, (steps * timeDelay), currentGridElem, 0, steps);
  }
  console.log(`${num} was not found`);
  return null;
}

const simpleSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    steps++;
    guesses.push(arr[i]);
    currentGridElem = document.querySelector(`#grid-item-${i + 1}`);

    if (arr[i] === num) {
      console.log(`${num} found at index ${i} in ${steps} step(s)`);
      setTimeout(updateGrid, (steps * timeDelay), currentGridElem, 120, steps);
      return i;
    }
    
    setTimeout(updateGrid, (steps * timeDelay), currentGridElem, 0, steps);
  }

  console.log(`${num} was not found`);
  return null;
}

const generateGridElements = (arr) => {
  // Generate the html elements that will represent the grid items
  arr.forEach(item => {
    const elem = document.createElement('div');
    elem.id = `grid-item-${item}`;
    elem.innerHTML = item;
    searchGrid.appendChild(elem);
  });
}

const resetGrid = (arr) => {
  arr.forEach(item => {
    document.querySelector(`#grid-item-${item}`).style = null;
  });
  steps = 0;
  guesses = [];
  timeDelay = +stepTimeSelect.value;
  updateInfo();
}

const updateGrid = (elem, hue, steps) => {
  let lightness = (95 - steps >= 45) ? 95 - steps : 45;
  elem.style = `background: hsl(${hue}, 70%, ${lightness}%`;
}

const updateInfo = () => {
  stepsValue.innerHTML = steps;
  timeValue.innerHTML = `${((steps * timeDelay) / 1000).toFixed(1)}sec (${steps} * ${timeDelay}ms)`;
  guessesString.innerHTML = guesses.map((guess, i) => {
    return (i < guesses.length - 1) ? `${guess}, ` : guess;
  }).join('');
}

window.addEventListener('DOMContentLoaded', () => {
  // console.log('this works')
  generateGridElements(numsArray);
});

binarySearchBtn.addEventListener('click', () => {
  resetGrid(numsArray);
  binarySearch(numsArray, +inputNumber.value);
  updateInfo();
});
simpleSearchBtn.addEventListener('click', () => {
  resetGrid(numsArray);
  simpleSearch(numsArray, +inputNumber.value);
  updateInfo();
})
resetBtn.addEventListener('click', () => window.location.reload());