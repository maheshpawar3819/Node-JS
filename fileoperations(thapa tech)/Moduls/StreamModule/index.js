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
  const rstream = fs.createReadStream("input.txt");

  //another way recomended way

  rstream.pipe(res);

//   rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
//   });

//   rstream.on("end", () => {
//     res.end();
//   });

//   rstream.on("error", (error) => {
//     console.log(error);
//     res.end("Error was found");
//   });
});

server.listen(port, () => {
  console.log("server is listning");
});
