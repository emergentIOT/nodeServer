const express = require('express');
const app = express();

app.listen(3000, () => console.log('listening at 3000'));

//Hosting static dir
app.use(express.static('public'));

//Save to database

//Authentication