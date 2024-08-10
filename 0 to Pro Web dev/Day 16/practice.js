//! Q1 

let msg = "   help!";
newmsg = msg.trim().toUpperCase();
console.log(newmsg);


//! Q2 

let name = "Mohit Raj";
console.log(name.slice(4,9));
console.log(name.indexOf("t"));
console.log(name.replace("oh", "an"));

//! Q3

let str = "college";
console.log(str.replace("l","t"));

//! Q4   Array questions 

let month = ["january", "july", "march", "august"];
// month.shift();
// month.shift();
// month.unshift("july");
// month.unshift("june");
// console.log(month);


//! Q5
month.splice(0,2, "july","june");

console.log(month);

//! Q6

let lang = ['c', 'c++', 'javascript', 'python', 'java', 'c#', 'sql'];

lang.reverse(); //.indexOf('javascript');

console.log(lang.indexOf('javascript'));
