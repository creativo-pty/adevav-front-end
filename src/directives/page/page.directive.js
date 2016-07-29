'use strict';

module.exports = (ngModule) => {
  ngModule.directive('page', ['$sce', ($sce) => {
    return {
      restrict: 'E',
      scope: {
        page: '<content'
      },
      template: require('./page.view.html'),
      link: (scope) => {
        scope.page.content = $sce.trustAsHtml(scope.page.content);
      }
    };
  }]);
};
