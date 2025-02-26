//! Practice Q1  Create a function that printa a poem 

function printpage () {
    console.log("twinkle Twinkle Little Star");
    console.log("How i Wonder What you are");
}

// printpage();

//! Practice 02 Create a function to roll dice & always the value of the dice (1 to 6)

function dice () {
    let rand = Math.floor(Math.random() * 6) +1;
    console.log(rand);
}

// dice();

//! Average of 3 numbers 

function average (a,b,c) {
    console.log((a+b+c)/3);
}

// average(4,5,6);

//! Create a function that prints the multiplications table of a number 

function printable (n) {
    for (let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}

// printable(7);

//! Create a function that return the sum of numbers from 1 to n.


function getsum (n) {
    let sum = 0;

    for (let i =1; i<=n; i++){
        sum +=i;
    }

    return sum;
}

// console.log(getsum(222)); 



//! Create a function that returns the concatenation of all strings in an array.

let str = ["hii", "Hello", "bye", "!"];

function concat(str) {
    let result = "";

    for (let i =0; i<=str.lenght; i++){
        result += str[i];
    }

    return result;
}

concat(str); 