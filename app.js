const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Starting server
const port = process.env.PORT || 3000;

// Set up a default route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
