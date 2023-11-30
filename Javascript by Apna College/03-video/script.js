//! Loops In JS 


// for (let count = 1; count <=5; count++) {
//   console.log("Apna College ");
// }

//* Calculate sum of 1 to 5

// let sum = 0;
// for (let i = 1; i <= 5 ; i++)
// {
//   sum = sum + i;
// }

// console.log(sum);


//! Infinite Loops 

//* Infinite loops : A Loop that never ends 

//for (let i = 1; i >= 0; i++){
// console.log("i", i ); }

//! While Loop 

// let i = 1 ;
// while (i <= 10 ){
//   console.log("Mohit Raj ", i ); i++;
// }

//! Do-While Loop

// let i = 1;
// do {
//   console.log("i=", i);
//   i++;
// } While (i <= 5);


//! For of Loop 

// let str = "Javascript";
// let size = 0;

// for (let val of str){   //iterator 
//   console.log("val ", val );
//   size ++;
// }
// console.log("String Siz = ", size );

//! For in Loops 

// let student = {
//   name: "Mohit Raj ",
//   age : 18,
//   marks : 452,
//   isPass: true,
// };

// for (let i in student){
//   console.log(i);
//}    // this returnss us keyvalue > name, age, maeks, isPass 

//! Let's Practice Q1

// for (let num = 0; num <=100; num++){
//   if (num%2 ===0) {
//     console.log("num=", num);
//   } 
// }

//! Q2

// let gameNum = 25;

// let userNum = prompt ("guess the game number : ");

// while (userNum != gameNum){
//   userNum = prompt ("you entered wrong number");
// }

// console.log("Congrates:" );


//! Strings in Js 

// let str = "mohit Raj"

// console.log(str[2]);

// Template Literate 
// let sentence = ` This is a Special String`;

// console.log(typeof sentence);

//! Template in JS 


// let obj = {
//   item : "pen",
//   Price : 45,
// };

// let output = `the cost of ${obj.item} is ${obj.Price} Rupees`;

// console.log(output);

//! String Methods in JS 

let str = "Mohit Raj"
str = str.toUpperCase();
console.log(str);
str = str.toLowerCase();
console.log(str);


{
let num = "   Mohit   Raj"
num = num.trim();
console.log(num); }


{
  let str = "012345678";
  let lett = "Mohit Raj"
  console.log(str.slice(1,5));
  console.log(lett.slice(0,5));
  console.log(lett.slice(0));
}

{
  let str = "Mohit";
  let str2 = "Raj";
  let str3 = str.concat(str2);
  console.log(str3);
}

{
  let str = "hello";
  console.log(str.replace("lo", "p"));
}

{
  let str  = "mohit";

  console.log(str.charAt(3));
  console.log(str[0]);
}


//! Practice Q
{
  let fullname = prompt("enter your fullname ");
  let username = "@" + fullname
  console.log(username);
}