// if
// const isUserloggedIn = true;
// const temperature = 41;

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }; 

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000;

// if (balance > 500) console.log("test"), console.log("Test 2");  // dont like this 

// if (balance < 500) {
//     console.log("less Than");
// } else if (balance < 750) {
//     console.log("Less Than 750");
// } else if (balance < 900) {
//     console.log("Less Than 750");
// } else {
//     console.log("Less Than 1200");
// }

const userLoggedIn = true ;
const debitcard = true;
const loggedfromgoogle = false;
const loggedfromEmail = true;

if (userLoggedIn && debitcard && 2==3){
    console.log("Allow to Shop ");
}

if (loggedfromgoogle || loggedfromEmail) {
    console.log("Allow ");
}
