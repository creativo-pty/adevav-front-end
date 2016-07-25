'use strict';

module.exports = (ngModule) => {
  ngModule.directive('searchForm', () => {
    return {
      restrict: 'E',
      scope: {},
      template: require('./search-form.html'),
      controller: 'searchFormCtrl',
      controllerAs: 'vm'
    };
  });
};
