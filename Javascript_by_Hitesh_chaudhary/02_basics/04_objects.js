// const tinderuser = new Object()

// const { userInfo } = require("os");

const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Mohit"
tinderuser.isLoggedIn = false

// console.table(tinderuser);

// console.log(tinderuser);

const regularUser = {
    email: "google@gmail.com",
    fullname: {
        userFullname: {
            Firstname: "Mohit",
            lastname: "raj"

        }
    }
}

// console.table(regularUser.fullname.userFullname.Firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.table(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogged'));

const course ={
    coursename: "Js in HIndi",
    price: "999",
    courseInstructor: "Mohit",
}

const {courseInstructor: instructor} = course
// console.log(instructor); 

// {
//     "name": "mohit",
//     "coursename": "Js in HIndi",
//     "price" : "Free",
// }

