//  singleton 


// object literals 
const mySym = Symbol("key1")


const Jsuser = {
    name: "mohit", 
    "Full Name": "Mohit Raj",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "mohit@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.table(Jsuser.email);
console.table(Jsuser["email"]);
console.log(Jsuser["Full Name"]);
console.log(Jsuser[mySym]);


Jsuser.email = "mohit123@gmail.com";
// Object.freeze(Jsuser);    //🤫 Freeze any Objects Here 
Jsuser.email = "mohit@google"
console.log(Jsuser);

Jsuser.greeting  = function(){
    console.log("Hello JS User");
}

Jsuser.greetingTwo  = function(){
    console.log(`Hello JS user, ${this .name}`);
    console.log(`Hello JS user, ${this.age}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

