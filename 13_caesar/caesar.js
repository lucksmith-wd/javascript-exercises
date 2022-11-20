const caesar = function (text, rot) {
    textArr = text.split('');
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].match(/[A-Za-z]/)) {
            textArr[i] = changeLetter(textArr[i], rot);
        }
    }
    return textArr.join('');
};

const changeLetter = (letter, rot) => {
    if (rot < 0) rot = 26 + rot % 26; // A shift of -n = shift of 26-n
    let oldCahrCode = letter.charCodeAt(0);
    let newCharCode = (oldCahrCode - (oldCahrCode <= 90 ? 65 : 97) + rot) % 26 + (oldCahrCode <= 90 ? 65 : 97);
    return String.fromCharCode(newCharCode);
}
console.log(caesar('a', -2354));

// Do not edit below this line
module.exports = caesar;
