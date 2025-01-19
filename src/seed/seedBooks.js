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
            console.log('just more seeds');
            await Book.insertMany([
                { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
                { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
                { title: 'War and Peace', author: 'Leo Tolstoy', year: 1869 },
                { title: 'The Odyssey', author: 'Homer', year: -700 },
                { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', year: 1866 },
                { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
                { title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953 },
                { title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847 },
                { title: 'Wuthering Heights', author: 'Emily Brontë', year: 1847 },
                { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
                { title: 'The Iliad', author: 'Homer', year: -750 },
                { title: 'Anna Karenina', author: 'Leo Tolstoy', year: 1877 },
                { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', year: 1880 },
                { title: 'Don Quixote', author: 'Miguel de Cervantes', year: 1605 },
                { title: 'Ulysses', author: 'James Joyce', year: 1922 },
                { title: 'The Divine Comedy', author: 'Dante Alighieri', year: 1320 },
                { title: 'Madame Bovary', author: 'Gustave Flaubert', year: 1857 },
                { title: 'Frankenstein', author: 'Mary Shelley', year: 1818 },
                { title: 'Great Expectations', author: 'Charles Dickens', year: 1861 },
                { title: 'The Grapes of Wrath', author: 'John Steinbeck', year: 1939 },
                { title: 'Les Misérables', author: 'Victor Hugo', year: 1862 },
                // ... add as many as you like
            ]);
            // console.log('Books already exist in the collection. Skipping seeding.');
        }
    } catch (error) {
        console.error('Error seeding books:', error);
    }
}

module.exports = { seedBooks };
