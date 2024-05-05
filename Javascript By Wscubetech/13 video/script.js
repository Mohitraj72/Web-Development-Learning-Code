//! Types of Operator in Javascript 

// var a = "Mohit Raj";
// var b = false;
// var c = ["car1"];

// document.write(typeof a); 
// document.write(typeof b);
// document.write(typeof c);

//! Events in Javascript 
// onclick	-  A user clicks on an element
// oncontextmenu	-  A user right-clicks on an element
// ondblclick	-  A user double-clicks on an element
// onmousedown	-  A mouse button is pressed over an element
// onmouseenter-  	The mouse pointer moves into an element
// onmouseleave	-  The mouse pointer moves out of an element
// onmousemove	-  The mouse pointer moves over an element
// onmouseout	-  The mouse pointer moves out of an element
// onmouseover	-  The mouse pointer moves onto an element
// onmouseup	-  A mouse button is released over an element


//! List of Form events in JS 

// onsubmit	
// onreset	
// onchange	
// oninput	
// onfocus	
// onblur	
 
//!  getElementsByName() & getElementsByTagName

// function getName () {
//     var uName = document.getElementsByName('u_name')[0].value;
//     document.getElementsByName('u_name')[0].value = "";
//    // console.log(uName);
//     document.getElementsByTagName("h1")[0].innerHTML = uName;
// }

//! SetInterval method in JS 
// function test () {
//     setInterval(function(){
//          alert("hello");
//         console.log("Hello");
//     }, 2500 )
// }

//! setTimeout() in JS
function test () {
    setTimeout (
        function () {
            //  alert("Hello");
            document.write ("Hello Mohit welcome ");

        }, 2000
    );
}

