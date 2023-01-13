var prompt=require('prompt-sync')()
var Array1 = [];
var Array2 = [];
var size = 5; 
console.log('enter the  Array 1 element');
for(var i=0; i<size; i++) {
	Array1[i] =parseInt(prompt(' '));
}
console.log('enter the  Array 2 element');
for(var i=0; i<size; i++) {
	Array2[i] =parseInt(prompt(' '));
}
for(var i=0;i<=4;i++){
        var temp=Array1[i]
        Array1[i]=Array2[i]
        Array2[i]=temp
   
}
console.log('Array after swapping:')
console.log('Array1:-'+Array1);
console.log('Array2:-'+Array2);
