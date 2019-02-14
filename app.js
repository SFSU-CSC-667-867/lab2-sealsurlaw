const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/hello')
        .then(resp => {
            res.send(resp.data);
        })
        .catch(err => {
            res.send(err);
        })
});

app.listen(port);