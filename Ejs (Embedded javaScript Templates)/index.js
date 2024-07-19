const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

//requireing ejs
app.set("view engine", "ejs");
//for running server globaly
app.set("views", path.join(__dirname, "/views"));

app.listen(port, () => {
  console.log("Server Running On :", port);
});

app.get("/hello", (req, res) => {
  res.send("You are on hello page");
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dice", (req, res) => {
  // lets assume that the data will come from database and we will sotore database in the variable
  let data = Math.floor(Math.random() * 6) + 1;
  let name ="hii mahi"
  // pass the data in the form of object as an second argunment
  res.render("rolldice.ejs", { data , name});
});
