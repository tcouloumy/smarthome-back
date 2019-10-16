let config = require('./config')
let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let cors = require('cors');

let db = require('./models')


let port = config.server.port;
let app = express()

// HTTP logger
app.use(morgan('dev'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS for cross server querying
app.use(cors());


app.use('/', require('./modules/yeelight/yeelight.routes')());


app.listen(port, () => {
	console.log('API running on port ' + port);
})