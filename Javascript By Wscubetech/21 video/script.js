//! Basic Animation Using Javascript DOM 

function animation (){
    var redElem =document.getElementById('small');
    var poe = 0;
    var anim = setInterval(animate, 5);

    function animate(){
        if (poe == 350){
            clearInterval(anim);
        } else {
            poe++;
            redElem.style.top = poe + "px";
            redElem.style.left = poe + "px";
        }
    }
}