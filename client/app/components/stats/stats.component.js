import template from './stats.html';
import controller from './stats.controller';
import './stats.styl';

let statsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'stats'
};

export default statsComponent;
