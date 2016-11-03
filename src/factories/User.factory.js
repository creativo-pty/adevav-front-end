'use strict';

module.exports = (ngModule) => {
  ngModule.factory('User', User);

  User.$inject = ['$resource'];

  function User($resource) {
    return $resource(ADEVAV_BACKEND + 'users', {}, {
      get: {
        method: 'GET',
        isArray: true
      }
    });
  }
};
