'use strict';

module.exports = (ngModule) => {
  ngModule.directive('carousel', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./carousel.view.html'),
      controller: 'carouselCtrl',
      controllerAs: 'vm'
    };
  });
};
