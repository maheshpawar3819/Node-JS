//Creating the http server without using express

const http = require("http");
const { escape } = require("querystring");

const port = 8080;

const server = http.createServer((req, res) => {
  //handling routing
  // console.log(req.url)
  if (req.url == "/") {
    res.end("Hello from the server side :)");
  }else if(req.url =="/aboutus"){
    res.end("hello from about us page :)");
  }else if(req.url == "/contact"){
    res.end("hello from contact page :)");
  }else{
    res.writeHead(404, {"content-type" : "text/html"})
    res.end("<h1>404 Error Page does not exist</h1>"); 
  }
});

server.listen(port, () => {
  console.log("Listning on port", port);
});
