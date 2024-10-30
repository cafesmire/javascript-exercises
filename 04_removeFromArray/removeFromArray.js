const removeFromArray = function(arr, ...Args) {
    return arr.filter((element) => !Args.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
