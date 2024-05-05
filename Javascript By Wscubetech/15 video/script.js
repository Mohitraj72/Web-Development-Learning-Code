//! Modify Css Using JavaScript 

function modify() {
    document.getElementById('main').style.fontSize = "100px";
    document.getElementById('main').style.color = "blue";
    document.getElementById('main').style.backgroundColor = "yellow";
}


function unmodify() {
    document.getElementById('main').style.fontSize = "50px";
    document.getElementById('main').style.color = "red";
    document.getElementById('main').style.backgroundColor = "aqua";
}

//! clear timeout Method 
var my;
var name = "Welcome Mohit Raj";
function start() {
    my = setTimeout(function () {
        document.getElementById("nam").innerText = name;
    },
        5000);

    //! also we call this thing 👇
    document.getElementById('nam').style.backgroundColor = "aqua";

}

function stop() {
    clearTimeout(my);
    alert("Timeout Stop");
}


//! ClearInterval Method ❤️

var timer = setInterval(count,500);
var c = 0;
function count(){
    document.getElementById('time').innerText = c;
    c++;
}

function stoper() {
    clearInterval(timer);
}
