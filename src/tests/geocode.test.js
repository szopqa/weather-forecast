const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server/app.js');
const controller = require('./../server/controllers/weatherController.js');

describe('GET /weather/:address',()=>{

	it('Should return forecast for address passed as argument',(done) => {

		request(app)
			.get('/weather/Katowice',controller.showForecast)
			.expect(200)
			.end(done);
	});

	it('Should return Could not find any results for that location for invalid location',(done) =>{

		request (app)
			.get('/weather/123123123', controller.showForecast)
			.expect(200)
			.expect((res)=>{
				expect(res.text).toBe('Could not find any results for that location')
			})
			.end(done);
	})


});