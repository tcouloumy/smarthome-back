let config = require('./config')
let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');
let sequelize_fixtures = require('sequelize-fixtures');

let db = require('./models')


let port = config.server.port;
let app = express()

// HTTP logger
app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS for cross server querying
app.use(cors());


// Rebuild the database
db.sequelize.sync({ force: true }).then(() => {
	console.log("All models were synchronized successfully.")
	// loading test data
	sequelize_fixtures.loadFile('test_data.json', db).then(() => {
		console.log("Test data loaded");
	});
});

/* Loading the core modules */
app.use('/devices', require('./core/devices/devices.routes')());


/* Loading the additional modules */
app.use('/', require('./modules/yeelight/yeelight.routes')());


app.listen(port, () => {
	console.log('API running on port ' + port);
})