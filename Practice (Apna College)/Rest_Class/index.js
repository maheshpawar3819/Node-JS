const express = require("express");
const { userInfo } = require("os");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "maheshpawar2507",
    content: "I Love Coding",
  },
  {
    id: uuidv4(),
    username: "ravibhosale583",
    content: "Hard work is important to achieve the success",
  },
  {
    id: uuidv4(),
    username: "sanketpawar843",
    content: "I got selected for my 1st internship",
  },
  {
    id: uuidv4(),
    username: "ashwinig843",
    content: "I got selected for my 1st Job",
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
  let id = uuidv4();
  posts.push({ id, username, content });
  // res.send("post request working fine");
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  // res.send("Request working fine ");
  //find id
  let post = posts.find((p) => id === p.id);
  // console.log(post);
  res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newcontent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newcontent;
  console.log(post);
  // res.send("patch request is working");
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  // res.send("delete success");
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("Server is listning on", port);
});
