// // Complete the countingValleys function below.
function countingValleys(n, s) {
  let stepArray = s.split('');
  let numValleys = 0;
  const findFeatureEndIndex = (arr) => {
    let up = 0;
    let down = 0;
    const incrementTerrain = (step) => {
      if (step === 'U') {
        up++
        return up
      } else {
        down++
        return down
      }
    }
    for (let i = 0; i < arr.length; i++) {
      incrementTerrain(arr[i]);
      if (up === down) {
        return i
      }
    }
  }
  while (stepArray.length > 0) {
    if (stepArray[0] === 'U') {
      stepArray.splice(0, findFeatureEndIndex(stepArray) + 1);
    } else {
      stepArray.splice(0, findFeatureEndIndex(stepArray) + 1);
      numValleys++;
    }
  }
  return numValleys;
}

console.log(countingValleys(100,"DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"))