const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log("Server Started On", port);
});

app.get("/", (req, res) => {
  res.send("Hello this is the  root path");
});

app.get("/apple", (req, res) => {
  res.send("this is the apple path");
});

app.get("/banana", (req, res) => {
  res.send("this is the banana path");
});

//when the rout can not match then show this default response
app.get("*", (req, res) => {
  res.send("this is unknown path");
});

// app.use((req, res) => {
//   console.log("new request received");
//   res.send("<h1>hii mahesh pawar how are you</h1>");
// });
