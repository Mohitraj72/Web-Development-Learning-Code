//alert("Hello world")

//! Event Handling in jS
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("Btn one is clicked Here ");
//   let a = 25;
//   a++;
//   console.log(a);
// };

// let div = document.querySelector("#div");
// div.onmousehover = () => {
//   console.log("Hello Mohit");
// };

//! Event Listner

// btn1.addEventListner("click", () => {
//   console.log("button has clicked");
// });

// btn1.addEventListner("click", () => {
//   console.log("button 1 that click ");
// });

let modeBtn = document.querySelector("button");
let currmode = "light";

modeBtn.addEventListener("click", ()=>{
  if(currmode === "light"){
    currmode = "grey"
  document.querySelector("body").style.backgroundColor = "grey";}
  else {
    currmode = "light";
    document.querySelector("body").style.backgroundColor = "Yellow"
  }

  console.log(currmode);
  
})