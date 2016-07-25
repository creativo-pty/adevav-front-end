'use strict';

module.exports = (ngModule) => {
  ngModule.config(theme);

  theme.$inject = ['$mdThemingProvider'];

  function theme($mdThemingProvider) {
    // $mdThemingProvider.theme('default').dark();
  }
};
