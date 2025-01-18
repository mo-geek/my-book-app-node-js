// src/app.js
const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/book.route');

const app = express();
// Parse JSON from request body
app.use(express.json());

// Use your routes
app.use('/', bookRoutes);

// Export the app so we can start the server in index.js
module.exports = app;
