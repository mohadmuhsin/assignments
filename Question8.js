var prompt=require('prompt-sync')()
var sum=0
var num=parseInt(prompt('Enter a limit:-'))
for(i=0;i<=num;i++){
    if(i%2!=0){
        sum=sum+i
    }
}console.log('Sum of the odd numbers = '+sum)