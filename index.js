const express = require('express');
const app = express();
const connection = require('./db/mysql');

app.get('/', function(req, res) {
	const showAllUsers = 'SELECT COUNT(*) AS count FROM users';
	connection.query(showAllUsers, function(error, results, fields) {
		if(error) { throw error }
		const usersNumber = results[0].count;
		res.send(`There are ${usersNumber} users`)
	});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(err) {
	if(err) { throw err }
	console.log(`App is running on port ${PORT}`)
})