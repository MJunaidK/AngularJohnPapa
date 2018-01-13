import 'angular-cookies';
import 'ngstorage';
import ResourcesModule from '../resources/resources.module';

const ServicesModule = angular.module('ssc.services',['ngCookies','ngStorage',ResourcesModule.name]);

export default ServicesModule;