const request = require('request');

let getCoordinates = (address, callback) =>{

	let encodedUrl = encodeURIComponent(address);

	request({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address='
					+encodedUrl,
		json:true
	},(error,response,body) =>{
		if(error){
			callback('Unable to connect to Google\'s servers .... ');
		} else if(body.status === 'ZERO_RESULTS'){
			callback('Could not find any results for that location');
		} else if (body.status === 'OK'){
			callback(undefined,{
				latitude : body.results[0].geometry.location.lat,
				longitude : body.results[0].geometry.location.lng,
				address : body.results[0].formatted_address
			});
		}
	});
};

//Testing purpose
// getCoordinates('Katowice',function(err,res){
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log(res);
// });



module.exports ={
	getCoordinates
};