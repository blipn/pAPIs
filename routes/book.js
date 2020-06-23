const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();


router.get("/", BookController.bookList);
router.get("/:id", BookController.bookDetail);
router.post("/", BookController.bookStore);
router.put("/:id", BookController.bookUpdate);
router.delete("/:id", BookController.bookDelete);
router.get("/title/:title", BookController.bookTitle);

module.exports = router;
