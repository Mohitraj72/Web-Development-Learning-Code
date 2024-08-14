//! Print a Poem using Functions 

function Poem(){
    console.log("Twinkle twinkle little star");
    console.log("How are wonder what you are ");
}

// Poem();

//! Create a Function to roll a dice & always display the value of the dice (1 to 6).

function random(){
   let rand=  Math.floor(Math.random()*6)+1 ;
   console.log(rand);
}
// random();

// ! Create a Function that gives us the average of 3 numbers. 

function average (a,b,c){
    let average = (a+b+c)/3;
    console.log(average);
}

// average(1,2,9);

// ! Create a Function that prints the multiplication table of a number. 

function table (n) {
    for (let i =n; i<=n*10; i+=n){
        console.table(i);
    }
}

// table(82);


//! Create a Function that returns the sum of numbers from 1 to n. 

function getSum(n) {
    let sum = 0;

    for (let i =1; i<=n; i++ ){
        sum +=i;
    }

    return sum;
}

// console.log(getSum(1000));

// ! Create a Function that returns the concatenation of all strings in an array. 

let str = [" hi", " hello", " bye", " !"];

function concat (str){
    let result = "";

    for(let i =0; i<str.length; i++){
        result += str[i];
    }

    return result;
}

// console.log(concat(str));

// ! 