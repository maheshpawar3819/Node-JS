const express = require("express");
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log("Server Started On", port);
});

app.use((req, res) => {
  console.log("new request received");
});
