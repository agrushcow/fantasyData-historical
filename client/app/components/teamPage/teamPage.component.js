import template from './teamPage.html';
import controller from './teamPage.controller';
import './teamPage.styl';

let teamPageComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'teamPage'
};

export default teamPageComponent;
