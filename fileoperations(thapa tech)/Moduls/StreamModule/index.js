//2nd way
//Reading data from a stream
//Create a readable stream
//Handle stream events -> data,end and error

const { error } = require("console");
const fs = require("fs");
const http = require("http");
const port = 8080;

const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    return res.end(data.toString());
  });
});

server.listen(port, () => {
  console.log("server is listning");
});
