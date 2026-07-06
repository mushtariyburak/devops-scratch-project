const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ 
        status: "Success", 
        message: "Hello World! This is running from scratch.",
        engineer: "Mushtari"
    });
});

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});