// Import necessary library
const express = require('express');

// Import our modular routers for /notes
const notesRouter = require('./notes');

// Make express available by call the variable "app"
const app = express();

// Make ./notes route
app.use('/notes', notesRouter);

// Export ./api route
module.exports = app;
