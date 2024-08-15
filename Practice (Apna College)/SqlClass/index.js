const { faker } = require("@faker-js/faker");
require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "demo",
  password: process.env.DB_PASSWORD,
});

//ADD DETA INTO THE TABLE
let qu = "INSERT INTO user (id,username,email,password) VALUES ?";
let users = [
  ["123a", "123_newsera", "abc@gmail.com", "abc"],
  ["123b", "123_newseb", "abcb@gmail.com", "abcb"],
];

try {
  connection.query(qu, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
    // console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();

const getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser());
