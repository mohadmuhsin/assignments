
 var arr=[];
 let count=0
var prompt=require('prompt-sync')()
var size=parseInt(prompt('Enter the size of the Array:-'))
for(let i=0;i<size;i++){
    arr[i]=parseInt(prompt('enter the element '+(1+i)+':-'))
    if(arr[i]%2==0){
        count++
    }
}console.log('Number of Even Numbers in the Given Array:-'+count)

