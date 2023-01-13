var read=require('prompt-sync')()
var number=parseFloat(read('Enter a number between 1 to 7:-'))
switch (number) {
    case 1:
        console.log('Sunday')
        break;
    case 2:
        console.log('Monday')
        break;
    case 3:
        console.log('Tuesday')
        break;
    case 4:
        console.log('Wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        cnsole.log('Friday')
        break;
    case 7:
        console.log('Saturaday')
        break;
    default:
        console.log('Invalid Entry')
        break;
}
