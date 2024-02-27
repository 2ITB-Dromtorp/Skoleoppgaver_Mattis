const express = require('express');
const questionData = require('./Questions');
const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static('build'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})

app.get('/questions', (req, res) => {
    res.send(JSON.stringify(questionData));
    res.end()
})
