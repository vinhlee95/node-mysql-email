const connection = require('../db');

function getUsers(req, res) {
	const GET_USERS = 'SELECT * FROM users';
	connection.query(GET_USERS, function(error, results, fields) {
		if(error) { throw error }
		const users = results;
		res.send(JSON.stringify(users));
	});
}

function createUser(req, res) {
	const CREATE_USER = 'INSERT INTO users SET ?';
	const user = {
		email: req.body.email,
	};
	connection.query(CREATE_USER, user, function(error, result) {
		if(error) { throw error }
		const message = {message: 'Success'};
		res.send(JSON.stringify(message));
	});
}

module.exports = {
	getUsers,
	createUser,
}