var prompt = require('prompt-sync')()
  let userHeight=parseInt(prompt('Please enter your height'));
  try {
    if(isNaN(userHeight)) throw "notANumberError";
    if(userHeight < 40) throw "tinyHeightError";
    if(userHeight > 200) throw "hugeHeightError";
  }
  catch(err) {
    console.log(err)
  }
  if(userHeight<200 && userHeight>40){
    console.log('valid')
  }
  


