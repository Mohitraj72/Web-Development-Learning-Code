console.clear;

// for (let i = 1; i <=5; i++){
//   console.log("i =", i);
// }

// Calculate sum of 1 to 5

// let sum = 0, n = 100;
// for (let i =1; i <= n; i++){
//   sum = sum + i;
// }
// console.log("sum = ", sum );

//! While Loop

// let i = 1;
// while (i <= 10) {
//   console.log("Hello");
//   i++;
// }

//! do while loop
// let i = 20 ;
// do {
//   console.log("Hello "); i++;
// } while (i <=10);

// let a = 20 ;
// do {
//   console.log("a = ", a); i++;
// } while (a <=10);

//! for of loop

let str = "javascript";
let size = 0;

for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("stringe size = ", size);
