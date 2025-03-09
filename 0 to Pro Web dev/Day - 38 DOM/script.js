// Corrected DOM manipulation
//   document.querySelector('.heading').innerHTML = " Helllo  ";
// document.getElementsByClassName("heading")[0].innerHTML = "Hello Mohit";

//! 1. Selection of an Element  this is the using of let here   and the also of Changing the HTML 
let a = document.querySelector('h1')

a.innerHTML = "Hello Guys";
a.style.color = "red";
a.style.backgroundColor = "white";
a.style.cursor = "pointer";


// let b = document.getElementsByClassName('heading')[0]

// b.style.color = "yellow";
// b.style.backgroundColor = "red"


//! Event Listner 

a.addEventListener("click", function () {
    console.log("Hey");
    a.style.backgroundColor = "green"
})



//! Simple example of bulb or whatever

let bulb = document.querySelector('#bulb')
let btn = document.querySelector('button')

let flag = 0

btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = 'yellow'
        btn.innerHTML = "OFF";
        console.log("Clicked");
        flag = 1
    } else {
        bulb.style.backgroundColor = 'transparent'
        console.log("Off");
        btn.innerHTML = "ON";
        flag = 0
    }
})


let h = document.querySelectorAll("h1")

h.forEach(function(e) {
    console.log(e);
})

// console.log(h);


document.getElementsByClassName("box")


document.querySelectorAll("h1").innerHTML = "bye";

