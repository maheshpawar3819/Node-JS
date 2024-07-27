//Creating the http server without using express
const http = require("http");
const { escape } = require("querystring");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  //handling routing
  // console.log(req.url)
  if (req.url == "/") {
    res.end("Hello from the server side :)");
  } else if (req.url == "/aboutus") {
    res.end("hello from about us page :)");
  } else if (req.url == "/contact") {
    res.end("hello from contact page :)");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/Userapi/userapi.json`, "utf-8", (error, data) => {
      console.log(data);
    });
    res.end("hello from user api side");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 Error Page does not exist</h1>");
  }
});

server.listen(port, () => {
  console.log("Listning on port", port);
});
