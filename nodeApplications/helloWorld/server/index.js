const express = require('express')
const app = express()
const port = 3001;
var mysql = require('mysql');
var cors = require('cors')

app.use(cors());

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

/*app.post('/updateuser/:newhobby/:id', (req, response, results) => {

	let newhobby = req.params.newhobby;
	console.log(newhobby);
	let sqlquery = "UPDATE elev SET hobby = ?,' WHERE id = 1";

	connection.query(sqlquery, function (error, results, fields) {
		if (error) throw error;
		response.send(JSON.stringify(results));
	});
	response.send('If this works, great!');
});*/



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})