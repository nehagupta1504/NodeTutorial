const { response } = require("express");
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const router = require("./userRoutes");
const app = express();

const PORT_NO = 8080;

//------------------View Engines
app.set("view engine", "pug"); // importing by express
app.get("/product/:id", (req, res) => {
  res.render("product", {
    title: req.params.id,
    product_name: Math.random() + " " + req.params.id,
    description: "sdbsjdbjsdb",
    time: new Date().toString(),
  });
});

app.listen(PORT_NO);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(function (req, res, next) {
//   console.log(`At ${new Date().toString()}, got request for ${req.url}`);
//   next();
// });
// app.get("/", (req, res) => {
//   fs.readFile("index.html", "ascii", (_, data) => {
//     res.end(data);
//   });
// });

// app.get("/users/:username", (req, res) => {
//   console.log(req.params);
// });

// app.get("/abcd", (req, res) => {
//   res.end();
// });
// app.post("/", (req, res) => {
//   console.log(req.body);
//   req.on("data", (body) => {
//     console.log(body.toString());
//   });
//   res.end("Got the body");
// });

//---------------------------------------Dynamic routes & router---------------------------
// app.get("/users/:userid", (req, res) => {});
// app.get("/users/:userid/books/:booksId", (req, res) => {});

// app.get("/users/:userid/books", (req, res) => {});

//so /users/:userid is common here so if there are thousands of requets like this then we have to write the common part again & again & If there are changes it'll become error prone
//so we use router

//Making another file for these routes userRoutes.js
// const router = express.Router();

// //by default these paths will be /users/userid/
// router.get("/", (req, res) => {});
// //by default these paths will be /users/userid/books/:booksId
// router.get("/books/:booksId", (req, res) => {});

// //by default these paths will be /users/userid/books
// router.get("/books", (req, res) => {});

// app.use("/users/:userid", router);

//-------------------------------Middlewares
//! Have access to request & response but doesn't concerned with a particular route
