// src/routes/book.routes.js

const express = require('express');
const BookController = require('../controllers/book.controller');

const router = express.Router();

/**
 * GET /getAllBooks
 * Uses BookController to retrieve paginated results
 */
router.get('/getAllBooks', BookController.getAllBooks);

module.exports = router;
