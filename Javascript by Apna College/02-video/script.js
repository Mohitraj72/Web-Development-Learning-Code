//! Operators and conditional Statement 

// This Comments print hello World
//console.log("Hello world");

//* Operators in Js (Arithmetic Operators)

// let a = 5;
// let b = 2;


// console.log("a+b =", a + b );
// console.log("a-b =", a - b );
// console.log("a*b =", a * b );
// console.log("a/b =", a / b );
// console.log("a**b =", a ** b );
// console.log("a%b =", a % b ); // 5^2 = 25 

//* Unary Operator 
// a++; // => a = a + 1 
// console.log(a); 

// a--; // => a = a - 1 
// console.log(a);

//! Assignment Opertors

// let a = 5;
// let b = 2;

// a += 4; // a = a + 4
// console.log("a = ", a);  //9

// a -= 4; // a = a- 4
// console.log("a = ", a);  // 5

// a *= 4; // a = a * 4
// console.log("a = ", a);  // 20

// a /= 4; // a = a / 4
// console.log("a = ", a);   // 5

// a %= 4; // a = a % 4
// console.log("a = ", a); // 1

// a **= 4; // a = a ** 4
// console.log("a = ", a);   // 1

//! Operators in Js

// let a = 5;
// let b = 2;

// console.log("a == b", a == b); // false
// console.log("a === b", a === b); // false
// console.log("a != b", a != b); // true
// console.log("a !== b", a !== b); // true


// console.log("a > b", a > b); // true
// console.log("a >= b", a >= b); // true
// console.log("a < b", a < b); // false
// console.log("a <= b", a <= b); // false


//! Logical Operators 

// let a = 5;
// let b = 2;

// let cond1 = a > b; // true
// let cond2 = a === b; // true
// console.log("cond1 && cond2 = ", cond1 && cond2);  // false 

// console.log("cond1 || cond2 =", a < b || a ===5); // True 

// console.log("cond1 || cond2 =", !(a===6) );   // true 


//! Conditional Statements 
  //* If Statement 

// let age = 65;

// if(age>= 18){
//   console.log("you an vote me ");
// }

// if (age<18){
//   console.log("You can't vote");
// }

// let mode = "light";
// let color;

// if(mode === "dark"){
//   color = "black";
// }

// if(mode === "light"){
//   color = "white"
// }

// console.log(color);

//! If-else statement 

let mode = "light"
let color;
if(mode === "dark"){
  color = "black";
} else {
  color = "white";
}
  console.log(color);


  //* 2nd Example 

let age = 16;

if(age>= 18){
  console.log("vote");
} else {
  console.log("not vote ");
}






