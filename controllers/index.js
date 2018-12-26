const connection = require('../db');

function getUsers(req, res) {
	const GET_USERS = 'SELECT * FROM users';
	connection.query(GET_USERS, function(error, results, fields) {
		if(error) { throw error }
		const users = results;
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(users));
	});
}

module.exports = {
	getUsers,
}