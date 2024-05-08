//! Print Table input by User 

var num = prompt("Please enter a Number");
for ( var i =1; i<=10; i++){
    document.write("<div>");
    document.write(num + " x " + i + "=" + i* num);
    document.write("</div>");

}