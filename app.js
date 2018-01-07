import MjkDepsModule from "./app.deps";
import appConfig from "./app.config";
import appRun from "./app.run";
import RoutesModule from './src/routes/routes.module';
const MjkModule = angular.module('mjk',
				[
					MjkDepsModule.name,
					RoutesModule.name
				])
				.config(appConfig)
				.run(appRun);

export default MjkModule