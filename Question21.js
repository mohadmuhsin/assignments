var prompt=require('prompt-sync')()

    let arr=[];
    
    let size=parseInt(prompt('Enter the size of the array:'))
    let rarr=[size-1];


    for(let i=0; i<limit; i++){
        arr[i]=parseInt(prompt('Enter the values of array'));
    }

   for(i=0;i<size-1;i++){
    rarr[i]=arr[i]*arr[i+1];
   }
  
   console.log(arr);

   console.log('adjacement array values are'+' '+rarr);

