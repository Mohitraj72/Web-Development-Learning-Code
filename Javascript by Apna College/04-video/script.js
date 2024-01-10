//console.clear()

//! Arrays in JS

//let array = ["mohit", "nikhil", "lalu", "kajal"]

// console.log(array);

// let marks = [78, 45, 82, 475, 782]

// console.log(marks.length);
// console.log(typeof array);
// console.log(marks[4]);

//! Loops over an Array

//* for Loops
// for (let i = 0; i < array.length; i++){
//   console.log(array[i]);
// }

//* For Of
// for (let arra of array){
//   console.log(array);

// }

//! Q1 Practice

// let marks = [75 ,78, 75, 91, 36, 79, 96];

// let sum = 0;

// for (let val of marks){
//   sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

//! Q2 Practice

// let items = [145, 511, 785, 954, 752];

// let i = 0;
// for (let val of items) {
//   let offer = val/10;
//   items[i] = items[i] - offer;
//   console.log(`value of index ${items[1]}`);
//   i++;
// }

//! Arrays Methods

//* Push Array

// let items = ["Laptop", "gadget", "mobile", "mouse"];

// items.push("keyboard", 45);

// console.log(items);

//* Pop Array
// let items = ["Laptop", "gadget", "mobile", "mouse"];

// let iterm = items.pop();

// console.log(items);
// console.log("deleted",iterm );

//* Tostring
// let items = ["Laptop", "gadget", "mobile", "mouse"];
// const num = [78,79,45,23,45];
// console.log(num.toString());

//console.log(items);
//console.log(items.toString());

//* Conccat Array

// let marvel = ["hero", "mohit", "spiderman"];

// let num = [45];

// let number = [485,754,4,7,1,4,47,1,4]
// let news = marvel.concat(num, number);

// console.log(news);

//* Unshift Number (add in the start )

// let heros = ["thor", "spider", "iron"];

// let val = heros.shift();
// console.log("deleted", val);
// console.log(heros);

//* shift in Array
// let num = [45,67,89,34,11];

// console.log(num.shift());
// console.log(num);

//* Slice in Array

// let heros = ["thor", "spider", "iron"];

// console.log(heros.slice(1,2));

// let num = [42,34,67,89,22];
// console.log(num.slice(1));

//* Splice Array
{
  // let arr = [1, 2, 3, 4, 5, 6, 7];

  // Add Element
  // console.log(arr);
  //arr.splice(2, 0, 101);

  // Delete element
   //arr.splice(3,1);

  //Replace Element
  //  arr.splice(3,1,101);
}

//* For each Loops 

// let arr = ["Delhi", "Pune"];

// arr.forEach(function printval(val){
//   console.log(val);
// });

// arr.forEach((val, idx, arr) =>{
//   console.log(val.toUpperCase(), idx, arr);
// });


//! Qs. For a given array of numbers, print the square of each value using the forEach loop.

// let nums = [67, 52, 39];

// let calcSquare = (nums) => {
//   console.log(nums*nums);
// }
// nums.forEach(calcSquare);

//! Map Array Method 

// let nums = [78,45,96,1,79];

// nums.map((val)=> {
//   console.log(val);
// });

//! Filter array Method 
// let arr = [1,2,3,4,5,6,7,8,9];

// let evenarr = arr.filter((val)=> {
//   return val% 2===0;
// })

// console.log(evenarr);

//! Reduce Array Method 


