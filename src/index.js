// src/index.js
const app = require('./app');

// Connect to MongoDB
// e.g., local DB named "mybookdb"
const mongoose = require('mongoose');
const { seedBooks } = require('./seed/seedBooks');

const PORT = process.env.PORT || 3000;

mongoose
    .connect('mongodb://127.0.0.1:27017/mybookdb')
    .then( async () => {
        console.log('MongoDB connected');

        // Run our seed function
        await seedBooks();

        // Start server after successful DB connection
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
