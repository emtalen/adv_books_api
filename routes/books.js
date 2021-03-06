const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController')

/* GET books listing. */
router
  .get('/', booksController.index)
  .get('/:id', booksController.show)
  .post('/:params', booksController.create)

module.exports = router;
