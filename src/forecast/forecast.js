const request = require('request');
const geocode = require('../geocode/geocode.js');
const weather = require('../weather/weather.js');

let getForecast = (address,callback) => {

	geocode.getCoordinates(address,(err,coordinates) => {
		if(err){
			callback(err);
			return;
		}

		weather.getWeatherForLocation(coordinates.latitude,
										coordinates.longitude,(err,forecast) => {
			if(err){
				callback(err);
				return;
			}
			callback(undefined,address,forecast);
		});
	});
};


module.exports = {
	getForecast
};