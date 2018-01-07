import salaryTemplate from './salary-details.html'

function salaryDetailsDirective(){
'ngInject';

	var controller = ['$scope',function($scope){
		$scope.message = "God is great.God Please bless me!!!"
	}];
	
	var link=function(scope,element){};
	
	return{
		template:salaryTemplate,
		restrict:'E',
		scope:{},
		controller:controller,
		link : link
	};
}

export default salaryDetailsDirective;