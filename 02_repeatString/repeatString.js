const repeatString = function (string, num) {
    let output = '';
    for (let i = 0; i < num; i++) {
        output += string;
    }
    return num < 0 ? 'ERROR' : output;
};

// Do not edit below this line
module.exports = repeatString;
