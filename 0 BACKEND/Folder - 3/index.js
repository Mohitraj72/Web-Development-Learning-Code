const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req,res) => {
    res.render("home.ejs")
});


app.get("/ig/:username",(req,res) => {
    let {username} = req.params;
    // console.log(username);
    res.render("instagram.ejs", {username})
} );


app.get("/hello", (req,res) => {
    res.send("Hello Guys ")
});

app.get("/roll", (req,res) => {
    let diceval = Math.floor(Math.random()*6) + 1;
    res.render("roll.ejs", {diceval});
});

app.listen(port, () => {
    console.log(`listening port ${port}`);
});