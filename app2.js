const express = require('express');
const app = express();
const port = 3001;

app.get('/hello', (req, res) => res.send("World"));

app.listen(port);