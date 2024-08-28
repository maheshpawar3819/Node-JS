const express = require("express");
const app = express();
const port = 8080;

app.use((req,res,next) =>{
    console.log("hii i am middleware");
    next();
})


app.get("/",(req,res) => {
    res.send("welcome to home page:)");
})

app.get("/random",(req,res) => {
    res.send("i am random page");
})

app.listen(port, () => {
  console.log("Listning on Port :", port);
});
