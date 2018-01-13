import 'angular-cookies';
import 'ngstorage';
import ResourcesModule from '../resources/resources.module';
import WeatherForecastService from './weather-forecast.service'

const ServicesModule = angular.module('mjk.services',['ngCookies','ngStorage',ResourcesModule.name])
							  .factory('MjkWeatherForecastService',WeatherForecastService);	

export default ServicesModule;