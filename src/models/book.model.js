// src/models/book.model.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    // Add other fields as needed
});

module.exports = mongoose.model('Book', bookSchema);
