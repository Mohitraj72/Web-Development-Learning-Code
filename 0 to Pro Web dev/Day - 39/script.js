let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function () {
//     console.log("Hello\n");
//     alert('msg');
// };


function sayHello() {
    alert('msg');
}

btn.onclick = sayHello;