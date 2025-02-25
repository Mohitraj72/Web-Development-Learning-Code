//! JS Object Literal 

let delhi = {
    latitude: "28.7041",
    longitude: "77.1025"
};

let students = {
    age: 23,
    name: "mohit",
    Marks: 94.4
};

console.log(students);


//! Create Thread / Twitter Post 

const post = {
    username: "@Mohitraj",
    Content: "This is My new Post",
    likes: 151,
    reposts: 5,
    tags: ["@college", "Raj"]
};

console.log(post["tags"]);

console.log(post.Content);

console.log(post.likes);
console.log(post.tags[0]);



//! Conversion in Get Value

//! Add/ Update Value

const studs = {
    name: "Mohit",
    age: 25,
    Marks: 94,
    city: "Delhi"
};

studs.city = "Mumbai";

studs.gender = "male";

console.table(studs);

delete students.age;

console.table(students);

//! Objects of Objects 

const classinfo = {

    mohit: {
        Grade: "a+",
        city: "Delhi"
    },

    Raj: {
        Grade: "B",
        city: "pune"
    },

    Sohan: {
        Grade: "C",
        city: "mumbai"

    }
};

classinfo.mohit.city = "Bihar";

console.log(classinfo.mohit.city);


//! Array Of Objects 


const classinformation = [
    {
        name: "Mohit",
        Grade: "A+",
        City: "Delhi"
    },

    {
        name: "Raj",
        Grade: "B+",
        city: "Mumbai"
    },

    {
        name: "Karan",
        Grade: "c+",
        city: "Bihar"
    }
]


console.log(classinformation[0]);
console.log(classinformation[1].name);


//! Math Objects

console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12));
console.log(Math.pow); 
console.log(Math.floor(-555.6556)); 


//! random number Generate

let num = Math.floor(Math.random() *100) +1 ;

console.log(num);


