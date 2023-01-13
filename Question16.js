var prompt=require('prompt-sync')()
var flag=0;
var number=parseInt(prompt('enter a number'))
for(let i=2;i<number;i++){
     if(number%i==0){
        flag++
     }
}
if(flag==0){
    console.log('prime number')
}else{
    console.log('not prime')
}
