const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like index.html) from the "public" directory
app.use(express.static('public'));

// Fallback route for unmatched requests (this ensures your index.html is served)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
