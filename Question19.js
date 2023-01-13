var prompt=require('prompt-sync')
let annualincome = parseInt(prompt('Enter your annual income'));

if (annualincome < 250000) {
    console.log('You except from tax liability');
} else if (annualincome >= 250000 && annualincome <= 500000) {
    let tax = (annualincome * 5 / 100);
    console.log('tax payable:' + tax)
} else if (annualincome > 500000 && annualincome <= 1000000) {
    let tax = (annualincome * 20 / 100);
    console.log('tax payable:' + tax)
} else if (annualincome > 1000000 && annualincome < 5000000) {
    let tax = (annualincome * 30 / 100);
    console.log('tax payable:' + tax)
}


