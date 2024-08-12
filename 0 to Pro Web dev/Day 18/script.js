//! Js object literal 

let student ={
    name: "Mohit Raj",
    age:15,
    marks: 99
};

const students ={
    name: "Mohit Raj",
    age:15,
    marks: 99
};

console.log(student);

//! Creating Post for Social media (OBJECTS)

const post = {
    username: "@mohitraj",
    content: "This is my #first post",
    likes: 10,
    Report: 2,
    tags: ["@college", "@course"]
};

console.table(post);


//! Get values from the objects key 

console.log(post["content"]);
console.log(post["likes"]);
console.log(post["tags"]);


//!  Add/Update Value in Object 

const student1 = {
    name: "Mohit",
    age: 23,
    marks: 94.4,
    city: "delhi"
}; 

console.log(student1["name"]); 
student1.gender = "male";  // Add valude in the object 
console.log(student1["gender"]); 
student1.marks = "A"  // Update the valude in object 
console.log(student1);

delete student1.marks;   // delete the key from the object 
console.log(student1);
