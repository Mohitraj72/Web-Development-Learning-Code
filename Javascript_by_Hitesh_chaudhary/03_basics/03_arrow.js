const user = {
    username: "Mohit Raj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Website`);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// function chai (){
//     let username = "mohit Raj"
//     console.log(this);
// }

// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "Mohit"})

console.log(addTwo(3,4));

const myarray = [2,5,7,8]
myarray.forEach()