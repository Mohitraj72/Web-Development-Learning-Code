let btn = document.querySelectorAll("button");
console.dir(btn);

// btn.onclick = function () {
//     console.log("Hello\n");
//     alert('msg');
// };

for (btn of btn) {
    btn.onclick = sayHello;
    btn.onmouseenter = function () {
        console.log("You entered");
    }
}

function sayHello() {
    alert('msg');
}


