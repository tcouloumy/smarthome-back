'use strict';

let config = require('./config')
let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');

let port = config.server.port;
let app = express()

// HTTP logger
app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log('API running on port ' + port);
})