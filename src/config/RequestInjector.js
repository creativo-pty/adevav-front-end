'use strict';

module.exports = (ngModule) => {
  ngModule.config(RequestInjector);

  RequestInjector.$inject = ['$httpProvider'];

  function RequestInjector($httpProvider) {
    $httpProvider.interceptors.push('SessionInjector');
  };
};
