//import salaryTemplate from './salary-details.html'

function salaryDetailsDirective(MjkWeatherForecastService){
'ngInject';

	var controller = ['$scope',function($scope){
		$scope.message = "God is great.God Please bless me!!!";
		MjkWeatherForecastService.retrieveWeatherForecast().then((response) => {
			$scope.data=response;
			console.log(response);
		});
	}];
	
	var link=function(scope,element){};
	
	return{
		templateUrl:"src/components/my-profile/salary-details/salary-details.html",
		restrict:'E',
		scope:{},
		controller:controller,
		link : link
	};
}

export default salaryDetailsDirective;