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
console.table(obj3);

const users = {
    
}
