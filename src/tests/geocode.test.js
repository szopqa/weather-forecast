const expect = require('expect');
const request = require('supertest');

const {app} = require('./../app.js');

describe('POST /',()=>{

	it('Should return forecast for address passed as argument',(done) => {

		let address = 'Katowice';

		request(app)
			.post('/')
			.send({address})
			.expect(200)
			.end(done);
	});

});