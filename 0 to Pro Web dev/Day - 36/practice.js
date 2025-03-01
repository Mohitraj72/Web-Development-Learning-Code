//! Practice 

// Write an arrow function that returns the square of a number 'n

const sqaure = (n) => n*n;

console.log(sqaure(5));



//write a functiomn that prints "hello world" 5 times at interval of 2s each.

let id = setInterval (() => {
    console.log("Hello world");

},2000);


setTimeout(() => {
    clearInterval(id);
    console.log("clear Interval");
},10000);

