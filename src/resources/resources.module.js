import {WeatherForecastResource} from './weather-forecast.resources.js';
import 'angular-resource';
const ResourcesModule = angular.module('mjk.resources',['ngResource'])
							  .factory('MjkWeatherForecastResource',WeatherForecastResource);

export default ResourcesModule;