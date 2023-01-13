
       
var prompt=require('prompt-sync')()
var arr=[]
var size=parseInt(prompt("enter array size:"));

console.log('enter array values:');
for(var i=0;i<size;i++){
    arr[i]=(parseInt(prompt('')));
}




myFilter(arr,function callback(sum){
     if(sum%2==0){
   return true;
     }else{
     
       return false;
     }

});


function myFilter(a,b){

     let sum=0;
     for(var i=0;i<size;i++){
        sum=sum+a[i];
        
     }
     console.log(sum);
  
     console.log(b(sum));


     
}
