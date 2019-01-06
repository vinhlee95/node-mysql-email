const connection = require('../db');
const crypto = require('crypto');

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
		id: crypto.randomBytes(20).toString('hex'),
	};
	connection.query(CREATE_USER, user, function(error, result) {
		if(error) { throw error }
		const message = {message: 'Success'};
		res.send(JSON.stringify(message));
	});
}

function deleteUser(req, res) {
	const DELETE_USER = `DELETE FROM users WHERE email = ?`;
	const {email} = req.body;
	connection.query(DELETE_USER, email, function(error, result) {
		if(error) { throw error };
		res.send('Successfully deleted user');
	});
}

function updateUser(req, res) {
	const { email, id } = req.body;
	const UPDATE_USER = `UPDATE users SET email = ? WHERE id = ?`;
	connection.query(UPDATE_USER, [email, id], function(error, result) {
		if(error) { throw error };
		res.send(`Successfully updated user with email ${email}`);
	});
}

function filterUser(req, res) {
	const { type } = req.body;
	const FILTER_USER = `SELECT * FROM users WHERE created_at between date_sub(now(), INTERVAL 1 ${type.toUpperCase()}) and now();`;
	connection.query(FILTER_USER, function(error, result) {
		if(error) { throw error };
		res.send(JSON.stringify(result));
	})
}

module.exports = {
	getUsers,
	createUser,
	deleteUser,
	updateUser,
	filterUser,
}