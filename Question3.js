const prompt = require('prompt-sync')();
var P=parseInt(prompt('Principle Amt'))
var R=parseFloat(prompt('Rate of interest'))
var n=parseFloat(prompt('Number of years'))
console.log("si="+((P*R*n)/100))