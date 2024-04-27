// Primitive 

// 7 Types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567890123456n






// Referance (Non Prmitive)

// Array,  Objects , Functions 

const heros = ["shaktiman", "lala", "Mahatma"];
let myObj= {
    name: "Mohit",
    age: 22,

}

const myFunction = function() {
    console.log("Hello");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof anotherId);




// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Moht raj ";
let anothername = myYoutubename 
anothername = "Mohit Kumar"
console.log(myYoutubename);
console.log(anothername);

let user = {
    email : "User@gmail.com"
    //upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "mohit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);