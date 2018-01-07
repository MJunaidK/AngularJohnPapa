import allRoutes from './all.routes';

function routesConfig($stateProvider,$urlRouterProvider,$locationProvider){
	'ngInject';
	
	//$locationProvider.html5Mode(false);
	//$urlRouterProvider.when('','/');
	
	allRoutes.forEach((route) => {
		$stateProvider.state(route);
	})
	//$urlRouterProvider.otherwise('/header');
}

export default routesConfig;