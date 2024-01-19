const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect();

app.listen(3001, () => {
    console.log(`Server listening at `);
});


