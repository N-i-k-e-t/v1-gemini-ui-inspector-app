const express = require('express');
const app = express();
const port = 3001; // Choose any available port

app.get('/', (req, res) => {
    res.send('Gemini UI Inspector Backend!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});