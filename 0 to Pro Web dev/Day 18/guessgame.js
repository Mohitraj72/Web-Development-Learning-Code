// ! User enters a max number & then tries to guess a random generated number between 1 to max. 


const max = prompt("Enter your max number");
console.log(max);

const random = Math.floor(Math.random() * max)+ 1;
console.log(random);

let guess = prompt("Guess the number");

while(true) {
    if (guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("you are right! Congress");
        break;
    } else {
        guess == prompt ("Your guess was wrong try again");
    }
}