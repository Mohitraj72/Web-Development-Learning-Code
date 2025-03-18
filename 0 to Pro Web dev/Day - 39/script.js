let btn = document.querySelectorAll("button");
console.dir(btn);

// btn.onclick = function () {
//     console.log("Hello\n");
//     alert('msg');
// };

for (btn of btn) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function () {
    //     console.log("You entered");
    // }
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked me");
    });
}

function sayHello() {
    alert('msg');
}

let p = document.querySelector("p");

p.addEventListener("click", function() {
    console.log("Clicked");
})
