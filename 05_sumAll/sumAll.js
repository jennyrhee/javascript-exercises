const sumAll = function(intA, intB) {
  if (intA < 0 || intB < 0 || typeof intA !== 'number' || typeof intB !== 'number') {
    return 'ERROR';
  }

  let sum = 0;
  let smallest = Math.min(intA, intB)
  let largest = Math.max(intA, intB)
  for (let i = smallest; i <= largest; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
