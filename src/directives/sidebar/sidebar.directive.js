'use strict';

module.exports = (ngModule) => {
  ngModule.directive('sidebar', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./sidebar.view.html'),
      controller: 'sidebarCtrl',
      controllerAs: 'vm'
    };
  });
};
