const mongoose = require('mongoose');

// let url = "https://localhost:8080/users"


main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// const User = mongoose.model("User", userschema);
const Employee = mongoose.model("Employee", userschema);

aaaaaaaaaaaaaaaaaaaa
aaaaaaa 
qwww
qqwqw
wewe
123243
444