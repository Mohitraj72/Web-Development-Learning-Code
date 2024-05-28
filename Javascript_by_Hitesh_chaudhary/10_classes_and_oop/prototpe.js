// let nyName = "mohit"
// let myChannel = "chai"

// console.log(myName.trueLength);

let mtHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.mohit=function(){
    // console.log(`mohit is present in all object`);
}

Array.prototype.mohitraj=function(){
    // console.log(`Mohit Say Hello`);
}

// heroPower.mohit()
// myHeros.mohit()
// myHeros.mohitraj()
// heroPower.mohitraj()

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()