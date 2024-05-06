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

//! EventListner in JavaScript 😍😍
var i = 0;
document.getElementById('btn').addEventListener("click", function() {
    document.getElementById('counter').innerText = i;
    i++; // increment the counter
});
document.getElementById('btn').addEventListener("mouseenter",colorchange);

function colorchange () {
    document.getElementById('counter').style.background = "red";
}

document.getElementById('btn').addEventListener("mouseleave",function(){
    document.getElementById('btn').style.color = 'white';
});
