'use strict';

module.exports = (ngModule) => {
  ngModule.run(routeChange);

  routeChange.$inject = ['$rootScope', '$state', 'AuthService', 'PermissionsService'];

  function routeChange($rootScope, $state, AuthService, PermissionsService) {
    $rootScope.$watch(() => $state.current, ({ name, permissionRequired }) => {
      if (name.includes('admin') && !AuthService.isLoggedIn()) {
        return $state.go('index.login');
      }
      if (name === 'index.login' && AuthService.isLoggedIn()) {
        // TODO: Change to Admin Home Page when created
        return $state.go('admin.users.list');
      }

      const [resource, action] = (permissionRequired) ? permissionRequired.split('::') : ['', ''];

      if (permissionRequired && !PermissionsService.isUserAllowed(resource, action)) {
        // TODO: Change to previous page
        return $state.go('admin.users.list');
      }
    });
  };
};
