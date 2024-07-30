const express = require("express");
const app = express();
const port = 8080;

//for post request to read url data(middleware)
app.use(express.urlencoded({ extended: true }));
//if is in json format(middleware)
app.use(express.json());

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  //   console.log(req.query)
  res.send(`Standart get request Welcome ${user}!`);
});

app.post("/register", (req, res) => {
  //   console.log(req.body)
  let { user, password } = req.body;
  res.send(`Standart post request Welcome ${user}` );
});

app.listen(port, () => {
  console.log("listning on port : ", port);
});
