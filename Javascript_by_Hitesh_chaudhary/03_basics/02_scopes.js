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

one()