import ComponentsModule from './src/components/components.module';
import ServicesModule from './src/services/services.module';

const MjkDepsModule = angular.module('mjk-deps',
						[
							ComponentsModule.name,
							ServicesModule.name
						]);
export default MjkDepsModule;