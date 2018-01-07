import myProfileModule from './my-profile/my-profile.module';

const ComponentsModule = angular.module('mjk-components',
								[myProfileModule.name])
								
export default ComponentsModule; 
							