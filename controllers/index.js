const connection = require('../db');

function getUsers(req, res) {
	const GET_USERS = 'SELECT COUNT(*) AS count FROM users';
	connection.query(GET_USERS, function(error, results, fields) {
		if(error) { throw error }
		const usersNumber = results[0].count;
		res.send(`There are ${usersNumber} users`)
	});
}

module.exports = {
	getUsers,
}