let prompt=require('prompt-sync')()
let size=parseInt(prompt('Enter the  size '))

     let arr1=[];  
     let arr2=[];
     let sum=[];
     for(let i=0;i<size;i++){
          for(let j=0;j<size;j++){
            arr1[i]=[];
          }
     }
     for(let i=0;i<size;i++){
          for(let j=0;j<size;j++){
            arr2[i]=[];
          }
     }
     console.log('Enter the values of array 1')
     for(let i=0;i<size;i++){
          for(let j=0;j<size;j++){
            arr1[i][j]=parseInt(prompt(""));
          }
     }
     console.log('Enter the values of array 2')
     for(let i=0;i<size;i++){
          for(let j=0;j<size;j++){
            arr2[i][j]=parseInt(prompt(""));
          }
     }
 
     for(let i=0;i<size;i++){
          for(let j=0;j<size;j++){
            sum[i]=[];
          }
     }
     for(let i=0;i<size;i++){
          for(let j=0;j<size;j++){
            sum[i][j]=arr1[i][j]+arr2[i][j];
          }
     }
     console.log(" Sum of 2 arrays is:")
    
            console.log(sum);
         