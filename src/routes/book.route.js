// src/routes/book.routes.js
const express = require('express');
const Book = require('../models/book.model');

const router = express.Router();

/**
 * GET /getAllBooks?page=1&limit=5
 * Return paginated list of books
 */
router.get('/getAllBooks', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;   // default page = 1
        const limit = parseInt(req.query.limit) || 10; // default limit = 10

        // Calculate how many docs to skip
        const skip = (page - 1) * limit;

        // Get total count of documents
        const totalBooks = await Book.countDocuments();

        // Fetch the books with skip & limit
        const books = await Book.find()
            .skip(skip)
            .limit(limit)
            .exec();

        // Calculate total pages (assuming you want integer ceiling)
        const totalPages = Math.ceil(totalBooks / limit);

        // Build a response object
        const response = {
            data: books,
            meta: {
                totalItems: totalBooks,
                currentPage: page,
                totalPages: totalPages,
                limit: limit,
            },
        };

        return res.json(response);
    } catch (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
