const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static('build'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})