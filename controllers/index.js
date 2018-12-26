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

function createUser(req, res) {
	const CREATE_USER = 'INSERT INTO user SET ?';
	const user = {
		email: req.body.email,
		password: req.body.password,
	};
	connection.query(CREATE_USER, user, function(error, result) {
		if(error) { throw error }
		console.log(result)
		const message = {message: 'Success'};
		res.send(JSON.stringify(message));
		res.redirect('/');
	});
}

module.exports = {
	getUsers,
	createUser,
}