const expect = require('expect');

const converter = require('./../client/js/utils/converter');

describe('Converter tests',() => {

	it('Should return 10 Celsius degrees for 50 Fahrenheit',()=>{
		let tempInCels = Math.floor(converter.TempToCelsius(50));
		expect(tempInCels).toBe(10);
	});


	it('Should convert fahrenheit temperature and symbol in summary to Celsius', ()=> {
		let givenSummary = converter.extractFahrenheitFromSummary(
			'Light rain throughout the week, with temperatures rising to 50°F on Sunday.');
		let expectedSummary = 'Light rain throughout the week, with temperatures rising to 10.00°C on Sunday.';

		expect(givenSummary).toBe(expectedSummary);
	})

});