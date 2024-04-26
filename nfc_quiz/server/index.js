const express = require('express');
const questionData = require('./Questions.json');
const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static('build'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
})

app.get('/questions', (req, res) => {
    res.send(JSON.stringify(questionData));
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})