const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong!");
});

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});