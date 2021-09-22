const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  // this way it'll take the memory equal to the file size
  fs.readFile("big.file", (err, data) => {
    res.end(data);
  });
  //using createReadStream
  //   fs.createReadStream("big.file").pipe(res);
});

app.listen(8080);
