// external dependencies
const bodyParser = require("body-parser");
const cors = require('cors')

// internal dependencies
const db = require('./db.config');

module.exports = (app) => {

	//setup cors
	app.use(cors({
		origin: 'http://localhost:8080'
	}));

	// parse requests of content-type - application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	// parse requests of content-type - application/json
	app.use(bodyParser.json());

	// attach router
	require('./routes')(app);

	// set port, listen for requests
	const PORT = process.env.API_PORT || 8080;

	db.sequelize.sync().then(() => {
		app.listen(PORT, () => {
			console.log('Listening on localhost:' + PORT);
		})
	})


}

