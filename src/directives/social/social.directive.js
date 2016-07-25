'use strict';

module.exports = (ngModule) => {
  ngModule.directive('social', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./social.html'),
      controller: 'socialCtrl',
      controllerAs: 'vm'
    };
  });
};
