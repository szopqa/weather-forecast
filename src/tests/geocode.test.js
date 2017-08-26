const expect = require('expect');
const request = require('supertest');

const {app} = require('./../app.js');
const controller = require('./../controllers/weatherController');

describe('GET /weather/:address',()=>{

	it('Should return forecast for address passed as argument',(done) => {

		request(app)
			.get('/weather/Katowice',controller.showForecast)
			.expect(200)
			.end(done);
	});

});