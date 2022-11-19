const leapYears = function (year) {
    if (year % 4 === 0) {
        return year % 400 === 0 ? true : year % 100 === 0 ? false : true;
    }
    return false;

    // TOP solution:
    // return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

console.log(leapYears(1700));

// (year % 4 === 0) && 

// Do not edit below this line
module.exports = leapYears;
