// // Complete the countingValleys function below.
function countingValleys(n, s) {
  let stepArray = s.split('');
  let numValleys = 0;
  let level = 0;
  let valley = false;
  for (let i = 0; i < stepArray.length; i++) {
    if (stepArray[i] === 'U') {
      level++
      if (level === 1) {
        valley = false;
      }
    } else {
      level--
      if (level === -1) {
        valley = true;
      }
    }
    if (level === 0 && valley) {
      numValleys++
    }
  }
  return numValleys;
}

console.log(countingValleys(12,"DDUUDDUDUUUD"))