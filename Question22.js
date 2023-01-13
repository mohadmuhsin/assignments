
var prompt = require('prompt-sync')()

let size = parseInt(prompt('Enter the size of the array'));
let arr1 = [];
let arr2 = [];
let arr3 = [];
getArray(size)
addArray(arr1, arr2, size)
displayArray(arr1, arr2, arr3)




function getArray(size) {
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            arr1[i] = [];
        }
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            arr2[i] = [];
        }
    }
    console.log('enter the values of array1')
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            arr1[i][j] = parseInt(prompt(""));
        }
    }
    console.log('Enter the values of array 2')
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            arr2[i][j] = parseInt(prompt(""));
        }
    }
 



    return arr1, arr2
}


function addArray(arr1, arr2, size) {

    for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            arr3[i]=[];
        }
   }
   for(let i=0;i<size;i++){
        for(let j=0;j<size;j++){
            arr3[i][j]=arr1[i][j]+arr2[i][j];
        }
   }

    return arr3

}


function displayArray(arr1, arr2, arr3) {
    console.log('first array is:')
    console.log(arr1)
    console.log('second array is:')
    console.log(arr2)
    console.log('sum of the array:')
    console.log(arr3)
}

