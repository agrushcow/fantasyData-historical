import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Stats from './stats/stats';
import TeamPage from './teamPage/teamPage';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Stats.name,
  TeamPage.name
]);

export default componentModule;
