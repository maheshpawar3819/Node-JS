//Creating the http server without using express

const http=require("http");

const port=8080;

const server=http.createServer((req,res) => {
    res.end("Hello from the server side :)");
})

server.listen(port,() => {
    console.log("Listning on port",port)
})
