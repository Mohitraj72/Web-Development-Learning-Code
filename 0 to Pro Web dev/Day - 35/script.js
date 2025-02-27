//! functions in Javascript 

function hello() {
    console.log("hello");
}

// hello();

function isadult() {
    let age = 8;
    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

// isadult();

//! Function with agruments 

function printname(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

// printname("Mohit", 22);
// printname("Nikhil", 19);


function sum (a,b) {
    console.log(a+b);
}

// sum(5,8);


//! Return Keywords 

function sub(a,b) {
    return a-b;
}


// console.log(sub (3,4));


//! what is Scope 

// let sum = 54;   // global Scope 

// function calsum(a,b) {
//      let sum = a+b;  // Function scope 
//     console.log(sum);  
// }

// calsum();
// console.log(sum);


//! Block Scope 

{

    let a  = 25;
    const ab = 22; 


}


//! Lexical Scope 

function outerfunc() {
    let x = 5;
    let y = 6;
    function innerfun() {
        console.log(x);
        console.log(y);
    }

    innerfun(); 
}

outerfunc();


//! Function Expressions 

let name = "shardha";

let sums = function (a,b) {
    return a+b;
}

sums(1,2);


let hellos = function () {
    console.log("Hello");
}

hellos = function () {
    console.log("Namaste");
}

hellos();


//! High Order Functions 

function multiplegreet (func, count) {
    for (let i=1; i<=count; i++){
        func();
    }
}

let greet = function() {
    console.log("Hello jiii");
}

multiplegreet(greet, 1000);

multiplegreet(function() {console.log("Namaste")},100);


//! Higher order Functions  Return a Function 

function oddEvenTest(request) {
    if (request == "odd") {
        return 
    }
}

