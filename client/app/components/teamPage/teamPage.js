import angular from 'angular';
import uiRouter from 'angular-ui-router';
import teamPageComponent from './teamPage.component';

let teamPageModule = angular.module('teamPage', [
  uiRouter
])

.config(($stateProvider) => {
	"ngInject";
	$stateProvider
		.state('teamPage', {
			url: '/teamPage/:index',
			template: '<team-page></team-page>'
		});
})

.component('teamPage', teamPageComponent);

export default teamPageModule;
