const express = require('express');

const forecast = require('./forecast/forecast.js');

const app = express();

const port = process.env.PORT || 8888;

app.get('/',(req,res) => {
	forecast.getForecast('Knurów',(err,forecast)=>{
		if(err){
			res.send(err);
		}else{
			res.send(forecast);
		}
	});
});

app.listen(port,()=>console.log(`Server started on port ${port}`));