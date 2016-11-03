'use strict';

module.exports = (ngModule) => {
  ngModule.service('PermissionsService', PermissionsService);

  PermissionsService.$inject = ['$localStorage', 'Auth', 'AuthService'];

  function PermissionsService($localStorage, Auth, AuthService) {

    function get() {
      if (AuthService.isLoggedIn()) {
        return Auth.permissions().$promise;
      }
    }

    function isUserAllowed(resource, action) {
      const permissions = $localStorage.Permissions ? $localStorage.Permissions : {};

      if (permissions[resource]) {
        return permissions[resource].includes(action);
      }
    }

    function set(permissions) {
      $localStorage.Permissions = Object.assign({}, permissions);
    }

    return {
      get,
      isUserAllowed,
      set
    };
  }
};
