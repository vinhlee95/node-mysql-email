const express = require('express');
const router = express.Router();
// import controllers
const {
	getUsers,
} = require('../controllers');

router.get('/', function(req, res) {
	getUsers(req, res);
});

module.exports = router;