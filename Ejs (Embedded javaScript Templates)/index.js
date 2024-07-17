const express = require("express");
const app = express();
const path= require("path");
const port = 8080;

//requireing ejs
app.set("view engine", "ejs");
//for running server globaly
app.set("views",path.join(__dirname,"/views"));

app.listen(port, () => {    
  console.log("Server Running On :", port);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
