const express = require("express");
const router = express.Router();

//by default these paths will be /users/userid/
router.get("/", (req, res) => {});
//by default these paths will be /users/userid/books/:booksId
router.get("/books/:booksId", (req, res) => {});

//by default these paths will be /users/userid/books
router.get("/books", (req, res) => {});

module.exports = router;
