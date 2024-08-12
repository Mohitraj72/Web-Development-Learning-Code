//! Objects of Objects 

const classInfo = {
    mohit: {
        grade: "A++",
        city: "Delhi"
    },

    Raushan: {
        grade: "B++",
        city: "Bihar"
    },
    Nikhil: {
        grade: "C++",
        city: "Varanasi"
    }
}


console.table(classInfo);

console.table(classInfo.mohit);
console.table(classInfo.mohit.city);

classInfo.mohit.city = "sohsarai";

console.table(classInfo.mohit);


//  ! Array Of Objects 

const classInfo1 = [
    {
        name: "Mohit",
        grade: "A++",
        city: "Delhi"
    },

    {
        name: "Raushan",
        grade: "B++",
        city: "Bihar"
    },
    {
        name: "Nikhil",
        grade: "C++",
        city: "Varanasi"
    }
];

console.table(classInfo1[1]);
console.table(classInfo1[1].name);
console.table(classInfo1[2].grade);

classInfo1[1].city = "haryana";   // update cale in array objects 
classInfo1[1].gender = "male";   // add value in array objects 

console.table(classInfo1);


//! Math objects in JS 

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(12));
console.log(Math.pow(12, 4));
console.log(Math.floor(12.666));
console.log(Math.random());

