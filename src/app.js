const express = require('express');
const bodyParser = require('body-parser');

const forecast = require('./forecast/forecast.js');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8888;

app.post('/',(req,res) => {

	let address = req.body.address;

	forecast.getForecast(address,(err,forecast)=>{
		if(err){
			res.send(err).status(400);
		}else{
			res.send(forecast);
		}
	});
});

app.listen(port,()=>console.log(`Server started on port ${port}`));

module.exports = {
	app:app
};