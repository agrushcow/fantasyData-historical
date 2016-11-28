import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Services from './services/services';
import angularResource from 'angular-resource';
import 'normalize.css';
import resource from 'angular-resource';


angular.module('app', [
    uiRouter,
    resource,
    Common.name,
    Components.name,
    Services.name,
    angularResource
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .run (function ($http) {
$http.defaults.headers.common["Ocp-Apim-Subscription-Key"] = "c5a2574a06ce45ab89299fbc37c11ee4";
  })

  .component('app', AppComponent);
