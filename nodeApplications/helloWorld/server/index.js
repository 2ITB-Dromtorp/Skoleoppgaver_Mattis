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
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});

app.get('/users', (req, res) => {

	connection.query('SELECT * FROM elev', function (error, results, fields) {
		if (error) throw error;
		//res.send('Hei')
		res.send(JSON.stringify(results));
	});
})

app.put('/updateuser', (req, response, results) => {

	console.log(req.body)

	let newData = req.body.data;
	let sqlquery = "UPDATE elev SET Fornavn = ?, Etternavn = ?, Klasse = ?, Hobby = ?, Kjonn = ?, DatamaskinID = ? WHERE ElevID = ?";

	connection.query(sqlquery, [newData.Fornavn, newData.Etternavn, newData.Klasse, newData.Hobby, newData.Kjonn, newData.DatamaskinID, req.body.id], function (error, results, fields) {
		if (error) throw error;
		response.send(JSON.stringify(results));
	});
});



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})