const sumAll = function (from, to) {
    if (from < 0 || to < 0 || !(typeof from === 'number') || !(typeof to === 'number')) {
        return 'ERROR';
    }
    let sum = 0;
    for (let i = Math.min(from, to); i <= Math.max(from, to); i++) {
        sum += i;
    }
    return sum;
};

sumAll(10, '10');

// Do not edit below this line
module.exports = sumAll;
