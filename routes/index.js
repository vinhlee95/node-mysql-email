const express = require('express');
const router = express();
// import controllers
const {
	getUsers,
	createUser,
	deleteUser
} = require('../controllers');

router.get('/', function(req, res) {
	getUsers(req, res);
});

router.post('/register', function(req, res) {
	createUser(req, res);
});

router.delete('/delete', function(req, res) {
	deleteUser(req, res);
})

module.exports = router;