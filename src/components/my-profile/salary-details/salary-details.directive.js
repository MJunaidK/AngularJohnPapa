//import salaryTemplate from './salary-details.html'

function salaryDetailsDirective(){
'ngInject';

	var controller = ['$scope',function($scope){
		$scope.message = "God is great.God Please bless me!!!"
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