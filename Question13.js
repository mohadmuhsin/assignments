var word = require('readline-sync')
var string = word.question('enter a word:-')
for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
        var flag = 1
        break;
    }
} if (flag == 1) {
    console.log('Entered string is not a palindrome')
} else {
    console.log('Entered string is a palindrome')
}
