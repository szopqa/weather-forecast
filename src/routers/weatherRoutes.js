let weatherController = require('../controllers/weatherController.js');

weatherRoutes = (app) => {

	app.route('/weather/:address')
		.get(weatherController.showForecast)
};

module.exports = {
	weatherRoutes
};