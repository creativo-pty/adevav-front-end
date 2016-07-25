'use strict';

module.exports = (ngModule) => {
  ngModule.directive('navigate', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./navigate.html'),
      controller: 'navigateCtrl',
      controllerAs: 'vm'
    };
  });
};
