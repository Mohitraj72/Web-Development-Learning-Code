//! Print Pattern Using JavaScript 😍

 var rows = prompt("Please Enter", " ");
// var rows = 5;



// Callin 
printPatter(rows);


// declare and define the function 
function printPatter(rows) {
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= i; j++) {
            document.write("*");
            console.log("*");
        }
         document.write(  "<br/>");
        console.log("<br/>");
    }

    for (var i = rows ; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            document.write("*");
            console.log("*");
        }
         document.write(  "<br/>");
        console.log("<br/>");
    }
}