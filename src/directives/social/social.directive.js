'use strict';

module.exports = (ngModule) => {
  ngModule.directive('social', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./social.view.html'),
      controller: 'socialCtrl',
      controllerAs: 'vm'
    };
  });
};
