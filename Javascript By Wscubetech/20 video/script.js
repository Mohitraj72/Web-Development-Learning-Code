//! Print Pattern Using JavaScript 😍

var rows = prompt("Please Enter", " ");



// Callin 
printPatter(rows);


// declare and define the function 
function printPatter(rows) {
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; i <= i; i++) {
            // document.write("*");
            console.log("*");
        }
        // document.write(i + "<br/>");
        console.log("<br/>");
    }
}