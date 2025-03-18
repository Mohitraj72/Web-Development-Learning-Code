// let btn = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("Hello\n");
//     alert('msg');
// };

// for (btn of btn) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("You entered");
//     }
//     btn.addEventListener("dblclick", function () {
//         console.log("you double clicked me");
//     });
// }

function sayHello() {
    alert('msg');
}


// Paragraph 
let p = document.querySelector("p");

p.addEventListener("click", function () {
    console.log("Clicked");
})


//Box
let box = document.querySelector(".box");

box.addEventListener("mouseenter", function () {
    console.log("Box");

})



//! this event Listners 


let btns = document.querySelectorAll(".btns"); // Select all elements with class "btns"
let span = document.querySelector("span");
let main = document.querySelector("main");
let section = document.querySelector("section");

function changecolor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "pink"; // Corrected property name
}

// Add event listener to each button
btns.forEach(btn => {
    btn.addEventListener("click", changecolor);
});

// Add event listener to the span
span.addEventListener("click", changecolor);
main.addEventListener("click", changecolor);
section.addEventListener("click", changecolor);


//! Keyboard events 

let inp = document.querySelector("input");

inp.addEventListener("keydown", function() {
    console.log("Key was Pressed");
})