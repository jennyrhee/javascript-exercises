const reverseString = function(str) {
  let stringArray = str.split('');
  return stringArray.reverse().toString().replaceAll(',', '');
};

// Do not edit below this line
module.exports = reverseString;
