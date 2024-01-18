const express = require('express')
const app = express()
const port = 81;
var mysql = require('mysql');
var cors = require('cors')

app.use(cors());
app.use(express.json());

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'dromtorp'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);		return;
	}

	console.log('connected as id ' + connection.threadId);
});

app.get('/', (req, res) => {

	res.send('Dette er en Mattis sin node server');

})

app.get('/users', (req, res) => {

	connection.query('SELECT * FROM elev', function (error, results, fields) {
		if (error) throw error;
		//res.send('Hei')
		res.send(JSON.stringify(results));
	});
})

app.put('/updateuser/:fornavn/:etternavn/:klasse/:hobby/:kjonn/:datamaskinid/:id', (request, response, results) => {
	let fornavn = request.params.fornavn;
	let etternavn = request.params.etternavn;
	let klasse = request.params.klasse;
	let hobby = request.params.hobby;
	let kjonn = request.params.kjonn;
	let datamaskinid = request.params.datamaskinid;
	let id = request.params.id;
	let sqlquery = `UPDATE elev SET Fornavn = ?, Etternavn = ?, Klasse = ?, Hobby = ?, Kjonn = ?, DatamaskinID = ? WHERE ElevID = ?`;

  connection.query(sqlquery, [fornavn, etternavn, Number(klasse), hobby, kjonn, Number(datamaskinid), Number(id)], function (error, results, fields) {
    if (error) throw error;

    response.send('Hobby is updated on user ' + id + '!');
  });
});

app.get('/insert', (req, res) => {
	connection.query('INSERT INTO elev (Fornavn, Etternavn, Klasse, Hobby, Kjonn, DatamaskinID) VALUES ("Kari", "Normann", 1, "Musikk", "J", 1)', function (error, results, fields) {
		res.send('success');
	})
})

app.delete('/deleteuser/:id', (req, res) => {
	let id = req.params.id;
	connection.query('DELETE FROM elev WHERE ElevID = ?', [id], function (error, results, fields) {
		res.send('success');
	})
})



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})