

var prompt = require('prompt-sync')()
class Area {


   circle() {
      var value = parseInt(prompt('enter the radius'))
      var areasquire = (3.14 * value * value)
      console.log(areasquire)
   }

   squire() {
      var value = parseInt(prompt('enter the length'))
      var areasquire = value * value;
      console.log(areasquire)
   }

   rectangle() {
      var value = parseInt(prompt('enter the length'))
      var value1 = parseInt(prompt('enter the breadth'))
      var areasquire = value * value1;
      console.log(areasquire)

   }

   triangle() {
      var value = parseInt(prompt('enter the height'))
      var value1 = parseInt(prompt('enter the base'))
      var areasquire = value * value1;
      console.log(areasquire)

   }

}


class MyClass extends Area {

   choice() {
      let choice = prompt("1 for Circle,2 for Squire,3 for Rectangle,4 for Triangle......enter your choice")
      if (choice == 1) {
         this.circle()
      } else if (choice == 2) {
         this.squire()
      } else if (choice == 3) {
         this.rectangle()
      } else if (choice == 4) {
         this.triangle()
      }
   }
}

let obj1 = new MyClass();
obj1.choice();


