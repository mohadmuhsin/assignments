
var prompt = require('prompt-sync')()

let arr = [];
let size = parseInt(prompt('Enter size of the array'))
getArray(arr, size);
displayArray(arr);

function getArray(arr, size) {
    console.log('enter the elements of array')
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            arr[i] = []
        }

    }
    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            arr[i][j]=parseInt(prompt(''))
        }
    }
    return arr;
}

function displayArray(arr) {
    console.log(arr);
}
