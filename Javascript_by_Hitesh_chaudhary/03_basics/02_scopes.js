// var c = 2300;
let a  = 200;

if (true){
    let a = 10;
    const b  = 10;
    // console.log("inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Mohit Raj "

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);
    two()
}

// one() 

if (true){
    const username = "Mohit Raj"
    if(username === "Mohit Raj"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); ⚡
}
// console.log(username);  ⚡


//! ------------------ Interesting ------------// 

function addone(num){
    return num + 1
}
addone(5) 



const addTwo = function(num){
    return num + 2
}

addTwo(5)