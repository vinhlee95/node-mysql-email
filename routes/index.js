const express = require('express');
const router = express();
// import controllers
const {
	getUsers,
	createUser,
	deleteUser,
	updateUser,
	filterUser,
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

router.post('/update', function(req, res) {
	updateUser(req, res);
})

router.post('/filter', function(req, res) {
	filterUser(req, res);
})

module.exports = router;