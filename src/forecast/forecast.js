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
										coordinates.longitude,(err,weather) => {
			if(err){
				callback(err);
				return;
			}

			callback(undefined,{address : coordinates.address, weather : weather});
		});
	});
};


module.exports = {
	getForecast
};