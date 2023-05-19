//Before destructuring I wrote all those codes here together to test my logics.

const express = require("express");
const app = express();

// db
const fs = require("fs");
const data = fs.readFileSync("config/Database.json");
// db

//api will only handle the request
app.get("/api/users", (req, res) => {
  //controller will process the response
  res.send(data);
});

//api

app.listen(6000, () => {
  console.log("Listening on port 6000");
});
