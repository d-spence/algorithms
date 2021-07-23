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

countdown(time, stop);