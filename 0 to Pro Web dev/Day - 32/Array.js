//! Array [Data strucrture]

let student1 = ["aman", "Raj", "Baba"];

console.log(student1);

console.log(student1[1]);

//! Creating Array 

let info = ["Raj", 25, 2555.25];

console.log(info);


//! Arrays are Mutable 

let fruit = ["Mango", "apple", "Litchi"];
console.log(fruit);

fruit[0] = "Rasgulla";
fruit[2] = "Pineapple";
fruit[10] = "Website";

console.table(fruit);


//! Array Methods

// Push | Unshift |  Pop | Shift 

let cars = ['audi', 'bmw', 'zuv', 'maruti'];

console.table(cars);

cars.push("ferrari");

console.table(cars);

cars.pop();
console.log(cars);

cars.unshift("toyota");
console.log(cars);

//! Indexof & Includes Methods 

console.log(cars.indexOf("bmw"));
console.log(cars.includes("car"));

//! Concatenation & revere 

let primary = ["red", "Yellow", "blue"];
let secondary = ["Orange", "green", "violet"];

let allcolores = primary.concat(secondary);

console.log(allcolores);

console.log(primary.reverse());


//! Slice Array Method 

let colors = ["red", "yellow", "blue", "pink", "white"];

console.log(colors.slice(2, 5));

//! Splice Array Method

console.log(colors.splice(1, 3));

//! Sort array Method

let days = ["monday", "tuesday", "wednesday", "friday", "saturday", "sunday"];

console.log(days.sort());

//! Array Reference 

console.log("name" == "name");
console.log("name" === "name");
console.log([1] == [1]);
console.log([] == []);

//! Constant Array 

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array);

//! Nested Array 

let nums = [[2, 4], [3, 5], [7, 8], [10, 88], [77, 89]]
console.table(nums);


