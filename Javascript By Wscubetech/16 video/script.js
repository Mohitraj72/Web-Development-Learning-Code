//! DOM Manipulation in JS 
//! Open and close a new window using javascript window DOM | Open() and close()

var win;
function openWin(){
    win = window.open("https://rojgarfinder.great-site.net/?i=1", "width = 300px", "height=300px");
}

function closeWin(){
    win.close();
}


