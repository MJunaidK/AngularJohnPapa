function WeatherForecastResource($resource){
	'ngInject';
	
	return $resource("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",{},{get:{method:'GET',isArray:true}});
}

export {WeatherForecastResource};