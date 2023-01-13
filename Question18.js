var prompt=require('prompt-sync')()

   let writtentest=parseInt(prompt('Enter your score in written test'));
   let labexam=parseInt(prompt('Enter your score in lab exam'));
   let assignment=parseInt(prompt('Enter your score in assignment'));

  let grade=((writtentest*70/100)+(labexam*20/100)+(assignment*10/100));

   console.log('You overall grade is'+' '+grade);

