# Backend Documentation

## Overview

This document provides an overview of the backend code written in Node.js using Express.js framework. The backend serves static files and provides an API endpoint to retrieve question data.

## Dependencies

- Express.js

## Installation

Ensure you have Node.js installed on your machine. Then, install the required dependencies using npm:

```bash
npm install express
```

## Configuration

- The backend code assumes that there is a directory named build containing static files (such as HTML, CSS, and JavaScript) to be served.
- Question data is imported from a file named `Questions.js`

## Usage

To start the server, run the following command:

```bash
node server.js
```

Replace `server.js` with the filename containing your backend code.

The server will start running on the specified port or the default port 80 if not specified.

## API Endpoints

### 1. GET /
#### - `index.html` located in `/build/index.html`
### 2. GET /questions
#### - Retrieves questions and answers

## Code

```js
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
```

This code sets up a simple Express server that serves static files from the build directory and provides an endpoint to retrieve question data.