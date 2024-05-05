//! DOM Manipulation in JS 
//! Open and close a new window using javascript window DOM | Open() and close()

var win;
function openWin(){
    win = window.open("https://rojgarfinder.great-site.net/?i=1", "width = 300px", "height=300px");
}

function closeWin(){
    win.close();
}

//! Javascript screen Object and its properties

//! 1. screen.availHeight  2. screen.availWidth 3. screen.colorDepth 4. screen.height 5. screen.pixelDepth 6. screen.width 🤫

function test (){
    var height = screen.height + " "+ screen.width + " " +  screen.pixelDepth;
    alert(height);
}

//! Javascript Math Object
// Math.E        returns Euler's number
// Math.PI       returns PI
// Math.SQRT2    returns the square root of 2
// Math.SQRT1_2  returns the square root of 1/2
// Math.LN2      returns the natural logarithm of 2
// Math.LN10     returns the natural logarithm of 10
// Math.LOG2E    returns base 2 logarithm of E
// Math.LOG10E   returns base 10 logarithm of E 

var x = Math.round(3.6);
var a = Math.pow(2,3);
document.write("<h1>"+x+"</h1>");
document.write(a);

//! OTP Function Here 👇
function getOPT(){
    var x = Math.random() * 10000;
    alert(x);
    var opt = Math.floor(x);
    document.write(opt);
}

