// src/controllers/book.controller.js

const Book = require('../models/book.model');

/**
 * GET all books with pagination
 */
exports.getAllBooks = async (req, res) => {
    try {
        // 1) Parse query parameters for pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // 2) Count total documents
        const totalBooks = await Book.countDocuments();

        // 3) Fetch page of books
        const books = await Book.find()
            .skip(skip)
            .limit(limit)
            .exec();

        const totalPages = Math.ceil(totalBooks / limit);

        // 4) Build and send response
        const response = {
            data: books,
            meta: {
                totalItems: totalBooks,
                currentPage: page,
                totalPages,
                limit,
            },
        };

        return res.json(response);
    } catch (error) {
        console.error('Error fetching books:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
