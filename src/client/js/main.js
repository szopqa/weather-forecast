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
		setTimeout(()=>{
				outForecast =`
					<div class="col-sm-3 col-md-3">
						<div class="well text-center">
							<h4>${forecast.summary}</h4>
							<img src="../img/weather-icons/${forecast.icon}.png">
							<h5>
								Temperatures from <br>
								${TempToCelsius(forecast.temperatureMin)} °C to ${TempToCelsius(forecast.temperatureMax)} °C
							</h5>			
						</div>	
					</div>
			`;

			$('#forecasts').append(outForecast).slideDown(()=>{});

		},80*index);
	})

}
