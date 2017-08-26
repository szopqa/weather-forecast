const forecast = require('../forecast/forecast');

exports.showForecast = (req,res) => {
	let address = req.params.address;

	forecast.getForecast(address,(err,forecast)=>{
		res.header("Access-Control-Allow-Origin", "*");
		if(err){
			res.send(err).status(400);
		}else{
			res.send(forecast);
		}
	});

};