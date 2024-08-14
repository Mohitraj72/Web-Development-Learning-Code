//! Scope in JS 

let sum = 22;  // Global scope

function calsum (a,b) {
    let sum = a+b;   // Local Scope 

    console.log(sum);
}

// calsum(4,5)


// ! Block Scope 

//! lexical Scope 

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
    }

    innerFunc();
}

console.log(outerFunc());