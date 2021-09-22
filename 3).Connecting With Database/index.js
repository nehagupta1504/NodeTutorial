const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser({ extended: false }));
app.get("/", (req, res) => {
  res.send(index.html);
});
app.listen(8080);
