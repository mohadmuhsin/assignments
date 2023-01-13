var prompt = require('prompt-sync')()
var value1 = parseInt(prompt('enter a number:'))
var value2 = parseInt(prompt('enter another number:'))
var option = parseInt(prompt('1 for addition , 2 for substraction ,  3 for division , 4 for multiplication    ... Enter your option:'))
switch (option) {
    case 1:
        addition(value1, value2);
        break;
    case 2:
        substraction(value1, value2);
        break;
    case 3:
        division(value1, value2);
        break;
    case 4:
        multiplication(value1, value2);
        break;


    default:
        console.log('Invalid entry!!!')
        break;
}function addition(value1, value2) {
    var sum = value1 + value2;
    console.log(sum);
}
function subtraction(value1, value2) {
    var sum = value1 - value2;
    console.log(sum);
} function division(value1, value2) {
    var sum = value1 / value2;
    console.log(sum);
}function multiplication(value1, value2) {
    var sum = value1 * value2;
    console.log(sum);
}

