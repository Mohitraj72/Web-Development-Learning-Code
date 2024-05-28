function multipleBY5(num){
    this.num =num 
    return num*5
}

multipleBY5.power = 2

console.log(multipleBY5(5));
console.log(multipleBY5.power);
console.log(multipleBY5.prototype);


function createUser (username, score){
    this.username = username
    this.score = score
 }

 createUser.prototype.increment =function(){
    this.score++
 }

 createUser.prototype.printMe =function(){
    console.log(`score is ${this.score}`);
 }

 const chai = new createUser("chai", 25)
 const tea = createUser("tea", 25)

 chai.printMe()