'use strict';

module.exports = (ngModule) => {
  ngModule.factory('User', User);

  User.$inject = ['$resource'];

  const BASE_PATH = ADEVAV_BACKEND + 'users';

  function User($resource) {
    return $resource(BASE_PATH, {}, {
      create: {
        method: 'POST'
      },
      get: {
        method: 'GET',
        isArray: true
      }
    });
  }
};
