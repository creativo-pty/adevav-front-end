'use strict';

module.exports = (ngModule) => {
  ngModule.service('AuthService', AuthService);

  AuthService.$inject = ['$localStorage', '$location'];

  function AuthService($localStorage, $location) {

    function getAuthorizationToken() {
      return $localStorage['Authorization'] || '';
    }

    function getUser() {
      return $localStorage['User'] || {};
    }

    function isLoggedIn() {
      return getAuthorizationToken().length !== 0;
    }

    function login(token, user) {
      $localStorage['Authorization'] = token;
      $localStorage['User'] = user;
    };

    function logout() {
      $localStorage.$reset();
      $location.search({});
      $location.path('/');
    }

    function setUser(user) {
      $localStorage['User'] = user;
    }

    return {
      getAuthorizationToken,
      getUser,
      isLoggedIn,
      login,
      logout,
      setUser
    };
  }
};
