const repeatString = function(word, n) {
    let newWord;
    newWord = n < 0 ? 'ERROR' : '';
    for(let i = 0; i < n; i++){
        newWord += word;
    }
    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
