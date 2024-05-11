// Dates in JS 
let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCratedDate = new Date (2024, 3, 23, 5, 3);
let myCratedDate = new Date("01-14-2024");
console.log(myCratedDate.getTime());

// console.log(myCratedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000));

let newDAte = new Date();
console.log(newDAte.getHours());
console.log(newDAte.getDay());
console.log(newDAte.getMonth());


newDAte.toLocaleString('default',{
    weekday: "long"
})