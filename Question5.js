var prompt= require('prompt-sync')()
var mark=parseFloat(prompt('Enter your mark'))
if (mark>=90) {
    console.log('A Grade')    
}else if(mark<90 && mark>80){
    console.log('B Grade')
}else if(mark<=80 && mark>70){
    console.log('C Grade')
}else if(mark<=70 && mark>60){
    console.log('D Grade')
}else if(mark<=60 && mark>=50){
    console.log('E Grade')
}else{
console.log('Failed')
    }