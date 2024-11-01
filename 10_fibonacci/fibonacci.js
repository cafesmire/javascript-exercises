const fibonacci = function(num, memo) {
    num = parseInt(num);
    if(num < 0) return 'OOPS';

    memo = memo || {};
    if(memo[num]){
        return memo[num];
    }
    //base case
    if(num === 0) return 0;
    if(num === 1) return 1;

    return fibonacci(num-1, memo) + fibonacci(num-2, memo);
};

// Do not edit below this line
module.exports = fibonacci;
