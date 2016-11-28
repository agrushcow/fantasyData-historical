import angular from 'angular';
import uiRouter from 'angular-ui-router';
import statsComponent from './stats.component';

let statsModule = angular.module('stats', [
  uiRouter
])

.config(($stateProvider) => {
	"ngInject";
	$stateProvider
		.state('stats', {
			url: '/stats',
			template: '<stats></stats>'
		});
})

.component('stats', statsComponent);

export default statsModule;
