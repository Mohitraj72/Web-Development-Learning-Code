// const student = {
//   fullName: "Mohit Raj",
//   marks: 95.8,
//   printMarks: function () {
//     console.log("marks = ", this.marks);  // Student.marks 
//   },
// };

// const employee = {
//   calcTax(){
//     console.log("Tax rate is 10%");
//   }
// }

// const Karan = {
//   salary: 50000,
//   calcTax(){
//     console.log("Tax rate is 20%");
//   },
// };

// Karan.__proto__= employee;

// class ToyotaCar {
//     constructor(){
//         console.log("Creating New objects");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
    
//     start() {
//         console.log("Start");
//     }
//     stop() {
//         console.log("Stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// fortuner.setBrand (fortuner);
// let Lexus = new ToyotaCar("lexus", 12);
// Lexus.setBrand (Lexus);

class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{
}

let obj = new Child ();

