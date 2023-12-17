// Get input from the user
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Compare the two numbers and print the greater one
if (num1 > num2) {
    console.log("The greatest number is: " + num1);
} else if (num2 > num1) {
    console.log("The greatest number is: " + num2);
} else {
    console.log("The numbers are equal.");
}
