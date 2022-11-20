const findTheOldest = function (people) {
    let currentYear = new Date().getFullYear();
    let copyArr = [...people];
    return copyArr.sort((a, b) => (((b.yearOfDeath || currentYear) - b.yearOfBirth)
                                 - ((a.yearOfDeath || currentYear) - a.yearOfBirth)))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
