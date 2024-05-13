function SayMyName() {
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}
// SayMyName()

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if (username === undefined) {
        console.log("enter User Name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mohit"));
// console.log(loginUserMessage());

function calculateCartPrice (...num1){
    return num1

}

console.log(calculateCartPrice(200,400,500));