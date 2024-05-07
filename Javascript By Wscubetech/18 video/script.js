//! Printing data using window.print

function printpage(){
    // window.print();
   var body = document.getElementById('body').innerHTML;
   var data = document.getElementById('data').innerHTML;
   document.getElementById('body').innerHTML = data;
   window.print();
   document.getElementById('body').innerHTML = body;
};

//! Validate number using JS 👇
