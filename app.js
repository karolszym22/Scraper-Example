const express = require('express');

const app = express();

const exampleObject = {
    x: 1
};

app.get('/api', (req, res) => {
    res.json(exampleObject);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port: sds ${port}`);
});