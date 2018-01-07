import 'angular-ui-router';
import routesConfig from './routes.config'

const RoutesModule =angular.module('mjk.routes',
		[
			'ui.router'
		])
		.config(routesConfig);

export default RoutesModule;