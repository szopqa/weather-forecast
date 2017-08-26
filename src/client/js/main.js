$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let localizationTyped = $('#searchText').val();
		getForecast(localizationTyped);
		e.preventDefault();
	});
});

function getForecast(localizationTyped){

	axios.get('http://localhost:8888/weather/'+localizationTyped)
		.then((result) => {
			console.log(result);
			$('#searchingArea').slideUp(700,()=>{
				getLocationName(result);

				let dailyForecast =result.data.weather.dailyForecast;
				getSummaryForWeek(dailyForecast);
				getForecastForSingleDays(dailyForecast);
			});

		})
}

function getLocationName(result) {
	output = `
		<div class="container allign-center">
			<h1 class="text-center">${result.data.address}</h1>
		</div>
	`

	$('#localization').html(output);
}


function getSummaryForWeek(dailyForecast) {
	console.log(dailyForecast);
	summary = `
		<div class="container allign-center">
			<h5 class="text-center">
				${extractFahrenheitFromSummary(dailyForecast.summary)}
			</h5>
		</div>
	`;

	$('#weekly-summary').html(summary);
}


function getForecastForSingleDays(dailyForecast) {
	let outForecast ='';
	$.each(dailyForecast.data,(index,forecast)=>{
		console.log(forecast.summary);
		outForecast +=`
			<div class="col-sm-3 col-md-3">
    			<div class="well text-center">
    				<h4>${forecast.summary}</h4>
    				<h5>
    					Temperatures from ${TempToCelsius(forecast.temperatureMin)} to ${TempToCelsius(forecast.temperatureMax)}
    				</h5>			
    			</div>	
  			</div>
		`;

		/*outForecast += `
					<div class="col-lg-1 col-md-3 col-sm-4 col-xs-6">
						<div class="well text-center">
							<h5>${forecast.summary}</h5>
						</div>	
					</div>
				`;
				*/
	});

	$('#forecasts').html(outForecast);
}