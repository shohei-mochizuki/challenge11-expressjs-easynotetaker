// Import necessary libraries
const express = require('express');
const path = require('path');

// Import ./api route 
const api = require('./routes/index.js');

// Port setting for Heroku || Local computer
const PORT = process.env.PORT || 3001;

// Make express available by call the variable "app"
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make ./api route
app.use('/api', api);

// Set "public" folder as static file folder
app.use(express.static('public'));


// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route to direct users to a landing page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
