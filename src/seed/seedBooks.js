// src/seed/seedBooks.js
const Book = require('../models/book.model');

async function seedBooks() {
    try {
        const count = await Book.countDocuments();
        if (count === 0) {
            console.log('No books found. Seeding initial data...');
            await Book.insertMany([
                { title: '1984', author: 'George Orwell', year: 1949 },
                { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
                { title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953 },
                // ... add as many as you like
            ]);
            console.log('Seeding completed');
        } else {
            console.log('Books already exist in the collection. Skipping seeding.');
        }
    } catch (error) {
        console.error('Error seeding books:', error);
    }
}

module.exports = { seedBooks };
