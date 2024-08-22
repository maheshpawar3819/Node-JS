const { faker } = require("@faker-js/faker");
require("dotenv").config();
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log("Server is listning", port);
});

app.get("/", (req, res) => {
  let q=`SELECT COUNT(*) FROM user`;
  try {
    connection.query(q,(err,result) => {
      if(err) throw err;
      console.log(result);
      res.send(result);
    })
  } catch (err) {
    console.log(err);
    res.send("some error in database");  
  }
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "demo",
  password: process.env.DB_PASSWORD,
});

const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// //ADD DETA INTO THE TABLE
// let qu = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];

// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); //give 100 random fake users;
// }

// try {
//   connection.query(qu, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     // console.log(result.length);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// console.log(getRandomUser());
