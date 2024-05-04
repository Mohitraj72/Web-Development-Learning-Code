//! Date Methods in Js

var date = new Date();

function getDate() {
    document.getElementById('res').innerText = date;
}
function year() {
    document.getElementById('year').innerText = date.getFullYear();
}

function month() {
    var month = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "OCtober", "November", "December"];
    document.getElementById('month').innerHTML = month[date.getMonth()];
}

function hour() {
    document.getElementById('hour').innerHTML = date.getHours();
}

function todate() {
    document.getElementById('Date').innerHTML = date.getDate();
}



function day() {
    document.getElementById('Day').innerHTML = date.getDay();
}

function minute() {
    document.getElementById('minute').innerHTML = date.getMinutes();
}

function time() {
    document.getElementById('time').innerHTML = date.getTime();
}

function sec() {
    document.getElementById('sec').innerHTML = date.getSeconds();
}


