import angular from 'angular';
import salaryDetailsDirective from './salary-details/salary-details.directive';

const myProfileModule =angular.module("profileModules",[])
					   .directive("salaryDirective",salaryDetailsDirective);

export default myProfileModule;