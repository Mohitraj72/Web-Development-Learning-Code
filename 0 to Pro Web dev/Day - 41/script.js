// h1 = document.querySelector("h1");

//! Callbacks Nesting -> Callback Hell

// function changecolor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changecolor("red", 1000, () => {
//     changecolor("Orange", 1000, () => {
//         changecolor("green", 1000, () => {
//             changecolor("blue", 1000, () => {
//                 changecolor("violet", 1000)
//             })
//         });
//     })
// })

// changecolor ("yellow", 2000)
// changecolor ("blue", 3000)
// changecolor ("orange", 4000)

function savetoDb(data, success, failure) {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
        success();
    } else {
        failure();
    }
}

// savetoDb(
//     "Mohit raj",
//     () => {
//         console.log("Your data saved");
//         savetoDb(" hello world", () => {
//             console.log("Success to data no 2");
//         }, () => {
//             console.log("Failure data 2 connections");
//         })
//     },
//     () => {
//         console.log("Week Connections ");
//     }
// );


// //! Promises 

// function savetoDb(data) {
//     return new Promise((success, failure) => {
//         let internetspeed = Math.floor(Math.random() * 10) + 1;
//         if (internetspeed > 4) {
//             success("Succes : data was saved");
//         } else {
//             failure("failure : Data not saved");
//         }
//     });
// }

// savetoDb("Mohit Raj");

// //! Then & Catch 

// let request = savetoDb("Mohit Raj");
// request.then(() => {
//     console.log("Promise was resolved");
// })
//     .catch(() => {
//         console.log("Promise was rjected");
//     })


// //!Promises Chaning 

// savetoDb("Hello World")
//     .then(() => {
//         console.log("data 1 is saved Now Here");
//         savetoDb("Hello World")
//             .then(() => {
//                 console.log("data 2 Saved");
//             })
//     })
//     .catch(() => {
//         console.log("Promise was rejceted");
//     })



// //! promises 
// savetoDb("Hello Mohit")
//     .then((result) => {
//         console.log("data1 Saved");
//         console.log(result);
//         return savetoDb("Hello world");
//     })
//     .then((result) => {
//         console.log("data 2 Saved");
//         console.log(result);
//         return savetoDb("Mk Kumar")
//     })
//     .then((result) => {
//         console.log("data 3 saved");
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log("Promise was rejected");
//         console.log(error);
//     })



h1 = document.querySelector("h1");

// ! Callbacks Nesting -> Callback Hell

function changecolor(color, delay) {
    return new Promise((resolve, rjecte) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay);
    })
}

changecolor("red", 1000)
    .then(() => {
        console.log("red Color was changed");
        return changecolor("orange", 1000);
    })
    .then(() => {
        console.log("Orange color was completed");
        return changecolor("green", 1000);
    })
    .then(() => {
        console.log("green color was compledted");
        return changecolor("blue", 1000);
    })
    .then(() => {
        console.log("Blue color was changed");
    })

