const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

