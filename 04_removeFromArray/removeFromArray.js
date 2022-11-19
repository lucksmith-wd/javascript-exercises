const removeFromArray = function (arr, ...toRemove) {

    
    let indexes = [];
    for (const e of toRemove) {
            let index = arr.indexOf(e);
            if (index >= 0 && typeof arr[index] == typeof e) {
            arr.splice(index, 1);
        }
    }
    return arr;
    
    // TOP solution:
    // return arr.filter(e => !toRemove.includes(e)) // from TOP solution

};

// Do not edit below this line
module.exports = removeFromArray;
