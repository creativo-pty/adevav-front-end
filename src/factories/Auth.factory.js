'use strict';

module.exports = (ngModule) => {
  ngModule.factory('Auth', Auth);

  Auth.$inject = ['$resource'];

  function Auth($resource) {
    return $resource(ADEVAV_BACKEND + 'auth/login', {}, {
      post: {
        method: 'POST'
      }
    });
  }
};
