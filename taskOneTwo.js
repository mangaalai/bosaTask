// Task One
function temperatureReachingTime(T, D, C) {
  return Math.ceil((D - T) / C);
}

const case = temperatureReachingTime(6, 191, 21);

console.log(case);

// Task Two

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log("a");
  } else if (i % 3 === 0) {
    console.log("b");
  } else if (i % 6 === 0) {
    console.log("ab");
  } else {
    console.log(i);
  }
}
