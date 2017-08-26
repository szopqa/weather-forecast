const request = require('request');


let getWeatherForLocation = (latitude,longitude,callback) => {

	request({
		url: 'https://api.darksky.net/forecast/792a812de9a4029218193459b0735319/'+
				latitude+ ',' + longitude,
		json: true
	},(error,response,body) => {
		if(!error && response.statusCode === 200) {
			callback(undefined,{
				currentForecast : body.currently,
				hourlyForecast : body.hourly,
				dailyForecast : body.daily
			});
		} else {
			callback('Unable to connect to weather servers ... ');
		}
	});
};

module.exports ={
	getWeatherForLocation
}