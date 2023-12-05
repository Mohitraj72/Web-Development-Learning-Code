//! Arrays in JS

// let array = ["mohit", "nikhil", "lalu", "kajal"]

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

// items.pop();

// console.log(items);


//* Tostring 
// let items = ["Laptop", "gadget", "mobile", "mouse"];

// console.log(items);
// console.log(items.toString());

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

//* Slice in Array 

let heros = ["thor", "spider", "iron"]; 

console.log(heros);

console.log(heros.slice(1,3));

//* Splice Array 
{

  let arr = [1,2,3,4,5,6,7];

  console.log(arr);
  arr.splice(2, 0, 101);
}
