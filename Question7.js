var prompt=require('prompt-sync')()
var number=parseInt(prompt('Enter a Number'))
for (let i = 1; i <=10; i++) {
    const result=i*number
    console.log(i+'*'+number+'='+result)
    
}