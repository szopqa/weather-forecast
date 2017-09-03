/*
Function changing summary given with temp in Fahrenheit into Celsius
*/
 extractFahrenheitFromSummary = (summary) => {

	const regex = /^(.+?)(\d+)(°)(\w)(.*)/gm;

	let m;

	//Variable which is returned after whole extracting process
	let res='';

	while ((m = regex.exec(summary)) !== null) {
		// This is necessary to avoid infinite loops with zero-width matches
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}

		// The result can be accessed through the `m`-variable.
		m.forEach((match, groupIndex) => {

			if(groupIndex > 0){
				if(groupIndex === 2){
					match = TempToCelsius(match);
				} else if (groupIndex === 4){
					match = 'C';
				}
				res += match;
			}
		});

	}
	return res;
};

let TempToCelsius = (tempInFahrenheit) => {

	let tempInCels = (tempInFahrenheit - 32)/(1.8);

	return tempInCels.toFixed(2);
};

module.exports = {
	extractFahrenheitFromSummary,
	TempToCelsius
};