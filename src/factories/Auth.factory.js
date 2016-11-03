'use strict';

module.exports = (ngModule) => {
  ngModule.factory('Auth', Auth);

  Auth.$inject = ['$resource'];

  const BASE_PATH = ADEVAV_BACKEND + 'auth';

  function Auth($resource) {
    return $resource(BASE_PATH, {}, {
      login: {
        method: 'POST',
        url: BASE_PATH + '/login'
      },
      permissions: {
        method: 'GET',
        url: BASE_PATH + '/scope'
      }
    });
  }
};
