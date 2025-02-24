//! Loops In Javascript 

for (let i = 1; i <= 5; i++) {
    // console.log(i);
}


//! Print All Odd Number 

for (let i = 1; i <= 100; i = i + 2) {
    // console.log(i);
}


for (let i = 15; i >= 1; i = i - 2) {
    // console.log(i);
}

//! Print all even Number 

for (let i = 2; i <= 10; i = i + 2) {
    // console.log(i);
}


for (let i = 10; i >= 2; i = i - 2) {
    // console.log(i);
}

//! Infinite Loops 

// for (let i = 1; i >= 0; i++) {
//      console.log(i);
// }

//! Print the multiplication table for 5 

// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
// }


//! Nested For loops 

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        // console.log(j);
    }
}


//! while Loop 

let i = 1;

while (i <= 5) {
    // console.log(i);
    i++;
}


//! Break Keyword 

{
    let i = 1;
    while (i <= 5) {
        if (i == 4) {
            break;
        }
        // console.log(i);
        i++;
    }
}


//! Loops With Array

{
    let fruits = ["mango", "banana", "apple", "orange", "litchi"];
    fruits.push("pineapple")

    for (let i = 0; i < fruits.length; i = i + 1) {
        // console.log(i, fruits[i]);
    }

}



//! Nested Loops with Nested Array 

{
    let heores = [
        ["ironman", "spiderman", "thor"],
        ["superman", "wonder", "flash"]
    ];

    for (let i = 0; i < heores.length; i++) {
        // console.log(i, heores[i].length);

        for (let j = 0; j < heores[i].length; j++) {
            // console.log(`j=${j}, ${heores[i][j]}`);
        }
    }
}


{
    let students  = [["aman", 95], ["sardha", 89], ["karan", 88]];

    for (let i =0; i<students.length; i++){
        // console.log(`info of students = ${i+1}`);
        for (let j = 0; j<students[i].length;j++){
            // console.log(students[i][j]);
        }
    }
}

//! For of Loops 

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for (i of fruits){
    // console.log(i);
}

// for (char of "Mohit"){
//      console.log(char);
// }


//! Nested for of Loop 

{
    let fruits = ["mango", "apple", "banana", "litchi", "orange"];

    for (list of fruits) {
        for (fruits of list ){
            console.log(fruits);
        }
    }
}