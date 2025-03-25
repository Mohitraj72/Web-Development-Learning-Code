const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app listening in port ${port}`);
});


app.use((req, res) => {
    console.log(req);
    console.log("Request recievd");
});