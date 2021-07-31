// recursive countdown function
let time = +process.argv[2] || 0;
let stop = +process.argv[3] || 0;
// console.log(time, stop);

const countdown = (t, stop=0) => {
  console.log(t);
  if (t <= stop) {
    return;
  }
  countdown(t - 1, stop);
}

// countdown(time, stop);

// const charArray = Array.from('abcdefghijklmnopqrstuvwxyz');
const charArray = Array.from('ACGT');
let keysArray = [];

const createKeys = (source, len=3, string='') => {
  if (string.length >= len) {
    keysArray.push(string);
    return;
  }

  for (let i = 0; i < source.length; i++) {
    const current = source[i];
    createKeys(source, len, string + current);
  }
}

createKeys(charArray, 3);

console.log(keysArray, keysArray.length);