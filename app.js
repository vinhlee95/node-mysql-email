const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes');

app.use(cors());
app.use(router);
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, function(err) {
	if(err) { throw err };
	console.log(`App is running on port ${PORT}`)
})