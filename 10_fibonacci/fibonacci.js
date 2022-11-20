const fibonacci = function (n) {
    if (n < 1) return 'OOPS';
    let prev = 0;
    let current = 1; //value of first fibonacci number
    for (let i = 1; i < n; i++) {
        let temp = current;
        current += prev;
        prev = temp;
    }
    return current;
};

console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
