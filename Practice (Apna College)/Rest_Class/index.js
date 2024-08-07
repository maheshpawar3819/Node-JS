const express = require("express");
const { userInfo } = require("os");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "maheshpawar2507",
    content: "I Love Coding",
  },
  {
    username: "ravibhosale583",
    content: "Hard work is important to achieve the success",
  },
  {
    username: "sanketpawar843",
    content: "I got selected for my 1st internship",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  // console.log(req.body);
  let { username, content } = req.body;
  posts.push({ username, content });
  res.send("post request working fine");
});

app.listen(port, () => {
  console.log("Server is listning on", port);
});
