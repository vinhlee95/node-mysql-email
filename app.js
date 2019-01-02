const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes');

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 4001;
app.listen(PORT, function(error) {
	if(error) { throw error };
	console.log(`App is running on port ${PORT}`)
})