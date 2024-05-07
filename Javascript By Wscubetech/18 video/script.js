//! Printing data using window.print

function printpage() {
    // window.print();
    var body = document.getElementById('body').innerHTML;
    var data = document.getElementById('data').innerHTML;
    document.getElementById('body').innerHTML = data;
    window.print();
    document.getElementById('body').innerHTML = body;
};

//! Validate number using JS 👇
function val(elem) {
    // document.getElementById('res').innerText = elem.value;
    if (isNaN(elem.value)) {
        document.getElementById('res').innerText = "Please Enter No Only";
    } else {
        document.getElementById('res').innerText = "";
        if (elem.value.length >= 10) {
            document.getElementById('res').innerText = "Please enter only 10 digits";
        } else {
            document.getElementById('res').innerText = " ";
        }
    }
}

document.getElementById("res").style.color = "red";