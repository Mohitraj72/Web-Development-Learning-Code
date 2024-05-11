const name = "Mohit"
const repocount = 10

// console.log(name + repocount + " Value");
console.log(`Hello My name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Mohit')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-2, 4);
console.log(anotherString);

const newStringOne = "   Mohit Raj ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Mohitraj/subscribe%20newmember";

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));