const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello from a rebuilt Docker server running on port ${port}`);
});

app.get('/update', (req, res) => {
    res.send(`This is an updated code after a rebuild`);
});

app.listen(port, () => {
    console.log(`Docker nodejs app running on port ${port}`);
});
