//! This Keyword in Js 👇👇
var person = {
    firstName: "Mohit",
    secondName: " Raj",
    fullName: function () {
        return this.firstName + this.secondName;
    }
};
document.write(person.fullName());

function remove (elem){
    // elem.style.display = 'none';
    elem.style.background = 'red';

}

//! addEventListner in JavaScript 😍😍
var i = 0;
document.getElementById('btn').addEventListener("click", counter);

function counter (){
    document.getElementById('counter').innerText = i;
    i++; 
}
document.getElementById('btn').addEventListener("mouseenter",colorred);

function colorred () {
    document.getElementById('counter').style.color = "red";
}

document.getElementById('btn').addEventListener("mouseleave",colorblack);

function colorblack () {
    document.getElementById('counter').style.color = "black";
}

//! RemoveEventListner in JS 😊⚡

function stop (){
    document.getElementById('btn').removeEventListener("click",counter);
}
document.getElementById('btn').removeEventListener("mouseenter",colorreds);

function colorreds () {
    document.getElementById('counter').style.color = " ";
}

