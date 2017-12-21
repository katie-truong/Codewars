function findDivisors(num) {
  var divisors = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

function findSumSquare(divisors) {
  var sumSquare = 0;
  for (var j = 0; j < divisors.length; j++) {
    sumSquare += Math.pow(divisors[j],2);
  }
  return sumSquare;
}

function checkIfSumSquareIsASquare(sumSquare){
  return Math.sqrt(sumSquare) % 1 === 0; 
}

function listSquared(m, n) {
  var results = [];
  for (var k = m; k <= n; k++) {
    var divisors = findDivisors(k);
    var sumSquare = findSumSquare(divisors);
    if (checkIfSumSquareIsASquare(sumSquare)) {
      var elementArr = [];
      elementArr.push(k);
      elementArr.push(sumSquare);
      results.push(elementArr);
    }
  }
  return results;
}
