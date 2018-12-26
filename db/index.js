const mysql = require('mysql');
const faker = require('faker');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
	user: 'vinh',
	password: 'password',
	database: 'node_joinus',
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// faker functions to generate data
function getEmail() {
	return faker.internet.email();
}

function getDate() {
	return faker.date.recent(10);
}

// Create fake data
var data = [
	[getEmail(), getDate()],
	[getEmail(), getDate()],
	[getEmail(), getDate()]
];

// Create MySQL queries
// Add users
// const addUser = 'INSERT INTO users (email, created_at) VALUES ?';
// connection.query(addUser, [data], function (error, results, fields) {
// 	if(error) { throw error }
// });

// Export SQL connection
module.exports = connection;