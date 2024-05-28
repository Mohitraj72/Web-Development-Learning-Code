// const user = {
//     username: "Mohit",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
        // console.log("Got user details from Database");
        // console.log(`username: ${this.username}`);
        // console.log(`username: ${this}`);
//     }

// }

// console.log(user.username);
// console.log(user.getUserDetails());

function user (username, loginCount, isLoggedin){
    this.username= username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin
    this.greeting = function(){
        console.log(`welcome ${thus.username}`);
    }
    return this
}

const userOne = user("mohit", 12, true)
const userTwo = user("mohit Raj", 12, false)
console.log(userOne.constructor);
console.log(userTwo);