const sumAll = function(number1, number2) {
    let sum = 0;
    const message = 'ERROR';

    if((Number.isInteger(number1) && Number.isInteger(number2)) &&
        number1 > 0 && number2 > 0){
            if(number1 > number2){
                return sumAll(number2, number1);
            }
            while(number1 <= number2){
                sum += number1;
                number1++;
            }
    }else return message;

        return sum;
};

// Do not edit below this line
module.exports = sumAll;
