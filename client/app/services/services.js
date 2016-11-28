import angular from 'angular';
import StatsService from './stats/statsService';

let serviceModule = angular.module('app.services', [])
	.service(StatsService.name, StatsService);

export default serviceModule;