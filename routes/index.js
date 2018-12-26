const express = require('express');
const router = express();
// import controllers
const {
	getUsers,
	createUser,
} = require('../controllers');

router.get('/', function(req, res) {
	getUsers(req, res);
});

router.post('/register', function(req, res) {
	createUser(req, res);
});

module.exports = router;