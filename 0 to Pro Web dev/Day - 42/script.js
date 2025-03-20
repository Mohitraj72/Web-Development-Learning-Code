//!  Async Function

// async function greet() {
//     throw "404 Page not found";
//     return "Hello world";
// }

// greet()
//     .then((result) => {
//         console.log("Promise was resolved");
//         console.log("result was:", result);
//     })
//     .catch((err) => {
//         console.log("Promise was rejected with err: ", err);
//     })

// let hello = () => {
//     return 5;
// };


//! Await Keyword 

function getNUM() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000)
    });
}

async function demo() {
    await getNUM();
    await getNUM();
    getNUM();
}



h1 = document.querySelector("h1");

// ! Callbacks Nesting -> Callback Hell

function changecolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num >3) {
                reject ("promise rjected")
            }

            h1.style.color = color;
            console.log(`color chnaged to ${color}`);
            resolve("color changed")
        }, delay);
    })
}


//! error Handling 
async function color() {
    try {
        await changecolor("red", 1000);
        await changecolor("orange", 1000);
        await changecolor("blue", 1000);
        changecolor("pink", 1000);
    } catch (err) {
        console.log("error caught");
        console.log(err);
    }


    let a = 5;
    console.log(a);
    console.log("new number =", a + 3);
}




