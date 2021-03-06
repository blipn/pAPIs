const express = require('express')
const BookController = require('../controllers/BookController')

const router = express.Router()

router.get('/all', BookController.allBooks)
router.get('/', BookController.bookList)
router.get('/:id', BookController.bookDetail)
router.post('/', BookController.bookStore)
router.put('/:id', BookController.bookUpdate)
router.delete('/:id', BookController.bookDelete)
router.get('/title/:title', BookController.bookDetail)

module.exports = router
