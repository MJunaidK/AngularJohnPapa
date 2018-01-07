
import ComponentsModule from './src/components/components.module';

const MjkDepsModule = angular.module('mjk-deps',
						[
							ComponentsModule.name
						]);
export default MjkDepsModule;