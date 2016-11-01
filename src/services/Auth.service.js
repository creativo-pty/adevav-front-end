'use strict';

module.exports = (ngModule) => {
  ngModule.service('AuthService', AuthService);

  AuthService.$inject = ['$localStorage', '$location', '$window', 'Auth', 'toaster'];

  function AuthService($localStorage, $location, $window, Auth, toaster) {

    function getAuthorizationToken() {
      return $localStorage['Authorization'] || '';
    }

    function getUser() {
      return $localStorage['User'] || {};
    }

    function isLoggedIn() {
      return getAuthorizationToken().length !== 0;
    }

    function login(user) {
      return Auth.post(user).$promise
      .then(({ token, user }) => {
        $localStorage['Authorization'] = token;
        $localStorage['User'] = user;
        return $location.path('/admin');
      })
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    };

    function logout() {
      $localStorage.$reset();
      $location.search({});
      $location.path('/');
      $window.location.reload();
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
