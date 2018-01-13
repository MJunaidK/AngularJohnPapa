function WeatherForecastService(MjkWeatherForecastResource){
	'ngInject'
	
	var service={
			retrieveWeatherForecast : retrieveWeatherForecast 
	};
	
	return service;
	
	function retrieveWeatherForecast(){
		return MjkWeatherForecastResource.get().$promise.then((data) =>{
			return data;
		}).catch(function(e){
			console.warn("Error in wearther forecast service");
			return e.status;
		});
	}
}

export default WeatherForecastService;