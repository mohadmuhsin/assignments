
var prompt=require('prompt-sync')()

let size=parseInt(prompt('please enter the number of rows'));
let a = 1;

for(var i=1; i<=size;i++){
    var row='';
    for(var j=1; j<=i; j++){
        row+=a+'  '
        a++;
        
    }row+='\n'
    console.log(row);
}


