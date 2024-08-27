const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;
const path = require("path");
const Chat = require("./models/chats");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//for parsing data
app.use(express.urlencoded({ extended: true }));

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

//Index rout
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });
});

//new rout edit

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create rout

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  //   console.log(newChat);
  newChat
    .save()
    .then((res) => {
      console.log("chat was save.");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

app.listen(port, () => {
  console.log("Listing on port :", port);
});
