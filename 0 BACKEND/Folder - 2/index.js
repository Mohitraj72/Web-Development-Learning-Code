const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app listening in port ${port}`);
});


// app.use((req, res) => {
//      console.log(req);
//     console.log("Request recievd");
//     let code = "<h1> Fruits is here for you </h1>";
//     res.send(code);
// });


app.get("/", (req, res) => {
    res.send("you contacted root path by nodemon ");
})

// app.get("/apple", (req, res) => {
//     res.send("you contated apple path");
// })

// app.get("/home", (req, res) => {
//     res.send("you contated home path");
// })

// app.get("*", (req, res) => {
//     res.redirect("/");
// }) 

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let html = `<h1> Welcome to the here @${username}</h1>`
    res.send(html);
});

app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {
        res.send("nothing Search")
    }
    res.send(`search result for query${q}`)
});