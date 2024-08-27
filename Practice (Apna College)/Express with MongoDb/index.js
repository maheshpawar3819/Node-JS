const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

main()
  .then((res) => {
    console.log("Connect with Mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/test");
}

app.get("/", (req, res) => {
  res.send("all things are working fine");
});

app.listen(port, () => {
  console.log("Listing on port :", port);
});
