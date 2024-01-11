//alert("Hello world")

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log("Btn one is clicked Here ");
  let a = 25;
  a++;
  console.log(a);
};

let div = document.querySelector("#div");
div.onmousehover = () => {
  console.log("Hello Mohit");
};
