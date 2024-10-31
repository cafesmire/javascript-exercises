const palindromes = function (words) {
    const phrase = words.toLowerCase().replaceAll(/\W/g, '');
    let start = 0;
    let end = phrase.length-1;
    let truth = true;

    while(start < end){
        if(phrase.charAt(start) != phrase.charAt(end)){
            truth = false;
            return truth;
        }
        start++;
        end--;
    }
    return truth;
};

// Do not edit below this line
module.exports = palindromes;
