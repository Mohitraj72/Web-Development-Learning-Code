const express = require("express");
const app = express();
const path = require("path");
const instadata = require("./data.json");

const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs")
});


app.get("/ig/:username", (req, res) => {
    // const followers = ["raj", "sahil", "Mohit", "raushan"];
    // let {username} = req.params;
    // console.log(username);
    // console.log(instadata);

    let { username } = req.params;
    const data = instadata[username];
    // console.log(data);
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});


app.get("/hello", (req, res) => {
    res.send("Hello Guys ")
});

app.get("/roll", (req, res) => {
    let diceval = Math.floor(Math.random() * 6) + 1;
    res.render("roll.ejs", { diceval });
});

app.listen(port, () => {
    console.log(`listening port ${port}`);
});