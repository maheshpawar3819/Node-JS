const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const path = require("path");
const Chat = require("./models/chats");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
  .then((res) => {
    console.log("Connect with Mongodb.... ");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "send me imp questions of rdbms",
//   created_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

app.get("/", (req, res) => {
  res.send("all things are working fine");
});

app.listen(port, () => {
  console.log("Listing on port :", port);
});
