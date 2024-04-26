// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'minskole',
    port: 3306
});

pool.connect(function(err) {

    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + pool.threadId);
  });

app.get('/', (req, res) => {
    res.send('Hello World!');
})

//Registrer brukere i databasen
app.post('/registrer', async (req, res) => {
    
    try {
        const { username, password } = req.body;

        console.log(username, password);
        
        // Hashing the password
        var hashedPassword = await bcrypt.hash(password, 10);
        
        // Inserting user into the database
        const sql = 'INSERT INTO users (brukernavn, passord) VALUES (?, ?)';
        await pool.query(sql, [username, hashedPassword]);

        console.log('Brukeren ble registrert.');
        res.status(200).json({ message: 'Brukeren ble registrert.' });
    } catch (err) {
        console.error('Feil ved registrering:', err);
        res.status(500).json({ message: 'Feil ved registrering.' });
    }

});

// Login route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

        const data = await pool.query('SELECT * FROM users WHERE brukernavn = ?', [username]);
        const rows = data[0];
        const match = await bcrypt.compare(password, rows.passord);
        if (match) {
            res.status(200).json({ message: 'Innlogging vellykket.' });
        } else {
            console.error('Feil ved innlogging:', err);
            res.status(500).json({ message: 'Feil ved innlogging.' });
        }
});


// Utlån route
app.post('/api/utlån', async (req, res) => {
    const { brukerId, utstyrsId, utlånsdato, innleveringsdato } = req.body;

    try {
        await pool.query('INSERT INTO Utlån (BrukerID, UtstyrsID, Utlånsdato, Innleveringsdato) VALUES (?, ?, ?, ?)', [brukerId, utstyrsId, utlånsdato, innleveringsdato]);
        res.status(201).json({ message: 'Utlån registrert.' });
    } catch (err) {
        console.error('Feil ved utlån:', err);
        res.status(500).json({ message: 'Feil ved utlån.' });
    }
});

// Godkjenn utlån route
app.put('/api/utlån/:id', async (req, res) => {
    const utlånId = req.params.id;

    try {
        await pool.query('UPDATE Utlån SET Godkjent = true WHERE UtlånsID = ?', [utlånId]);
        res.status(200).json({ message: 'Utlån godkjent.' });
    } catch (err) {
        console.error('Feil ved godkjenning av utlån:', err);
        res.status(500).json({ message: 'Feil ved godkjenning av utlån.' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Serveren kjører på port ${PORT}`);
});

