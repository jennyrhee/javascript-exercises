const removeFromArray = function(array, ...elementsToRemove) {
  let newArray = [...array]
  for (const element of elementsToRemove) {
    let index = newArray.indexOf(element);
    if (index !== -1) {
      newArray.splice(index, 1);
    }
  }
  return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
