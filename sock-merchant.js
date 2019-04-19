// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let totalPairs = 0;
    if (n === 1) {
        return totalPairs;
    }
    while (ar.length > 0) {
      let firstSock = ar.shift();
      let matchingIndex = ar.findIndex((element) => {
        return element === firstSock;
      })
      if (matchingIndex !== -1) {
        ar.splice(matchingIndex, 1);
        totalPairs++;
      }
    }
    return totalPairs;
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))