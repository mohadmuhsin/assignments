var prompt=require('prompt-sync')()
var size=parseInt(prompt('Enter the size of an array'))
var arr=[];
for(i=0;i<size;i++){
    arr[i]=parseInt(prompt(''))
}console.log('Sorted Array:-')
for(let i=0;i<size;i++){
    for( let j=i+1;j<size;j++){
        if(arr[i]<arr[j]){
            var temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    } console.log(arr[i])
}
