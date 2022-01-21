const findTheOldest = function(array) {
  let oldest = array.sort((thisPerson, lastPerson) => {
    const currentYear = (new Date()).getFullYear();
    let thisAge = thisPerson.yearOfDeath ? thisPerson.yearOfDeath - thisPerson.yearOfBirth :
      currentYear - thisPerson.yearOfBirth;
    let lastAge = lastPerson.yearOfDeath ? lastPerson.yearOfDeath - lastPerson.yearOfBirth :
      currentYear - lastPerson.yearOfBirth;
    return thisAge > lastAge ? -1 : 1;
  });
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
