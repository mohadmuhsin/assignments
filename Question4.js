var prompt=require('prompt-sync')()
var mark=parseFloat(prompt('Enter your mark'))
if (mark<50) {
    console.log('failed')
    
}else{
    console.log('passed')
}