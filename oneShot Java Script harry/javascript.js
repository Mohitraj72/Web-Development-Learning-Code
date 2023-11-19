//! 1. Ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("This is document write");

//!2. JavaScript console API
// console.log('Hello world');
// console.warn("This is warning");
// console.error("This is an Error");
//console.clear()

//! 3. JavaScript Variables
// What are variables? - Containers to store data values

// numbers
var number = 34;
var number2 = 24;
//console.log(number + number2);

//! 4. Data types in JavaScript

//! string
var str1 = "this is a string";
var str2 = "this is also a String";

//! Objects
var marks = {
  mohit: 52,
  shashi: 74,
  lalu: 41,
};
//console.log(marks);

//! Booleans
var a = true;
var b = false;
//console.log(a, b);

var and = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "bablu", 4, 5];
//console.log(arr);

//! Operators in JavaScript

var a = 34;
var b = 56;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);
// console.log("The value of a - b is ", a-b);

//! Assignment Operators

var c = b;
c += 2;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

//! comparsion Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x < y);
// console.log(x > y);

//! Logical Operators
//* Logical and

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//* Logical or

// console.log(true ||  true);
// console.log(true || false);
// console.log(false ||  true);
// console.log(false ||  false);

//* Logical not
// console.log(!false);
// console.log(!true);

//! function in JavaScript
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}

// DRY = Do Not Repeat Yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
//console.log(c1, c2);

//! conditionals in javaScript
var age = 4;
// Single if statements
/*if (age > 6){
  console.log('you are not a kid');
}
// If else statements 
else{
  console.log('you are a kid');
}

//* if else Ladder
if (age >2){
  console.log("you are not a kid");
}

else if (age>56)
{
  console.log("Bacche nhi rahe ");
}*/

//! Loops in JavaScript
 //var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function (element) {
//   console.log(element);
// });
// let j = 0;
// while(j<arr.length){
//   console.log(arr[j]);
//   j++;
// }

//! Array Methods 
//let myArr = ["Fan", "Camera", 34, null, true];
//console.log(myArr.length);
//myArr.pop();
//myArr.push("mohit")
//myArr.shift()
//myArr.unshift("mohit")
//const newLen = myArr.unshift("Harry")
//console.log(newLen);
//console.log(myArr);

//! String Method in JavaScript 

let myLovelyString = "Mohit is a good Boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));

//console.log(myLovelyString.slice(0,5));

//d = myLovelyString.replace("Mohit", "Rohan");

//! Dates in JavaScript 

let myDate = new Date();

// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

//! DOM Maniulation in JavaScript 
//let elem = document.getElementById('click');
//console.log(elem);

//let elemClass = document.getElementsByClassName('container')
//console.log(elemClass);
//elemClass[0].style.background = "Yellow"
//elemClass[0].style.height = "300px"
//elemClass[0].style.width = "200px"
// elemClass[0].classList.add("box")
// elemClass[0].classList.add("boxes")
// elemClass[0].classList.remove("boxes")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn);

// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";


 //! Selecting using Query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

//! Events in JavaScript 
