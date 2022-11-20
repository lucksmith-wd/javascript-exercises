const palindromes = function (text) {
    let cleanText = text.toLowerCase().replace(/[^a-z]/g, "").split(' ').join('');
    return cleanText.split('').reverse().join('') == cleanText;
};

palindromes("");

// Do not edit below this line
module.exports = palindromes;
