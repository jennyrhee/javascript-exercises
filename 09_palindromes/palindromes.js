const palindromes = function (string) {
  let newString = string.toLowerCase().replaceAll(/[^\w]/g, '');
  let reversed = newString
                  .split('')
                  .reverse()
                  .toString()
                  .replaceAll(',', '');
  return newString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
