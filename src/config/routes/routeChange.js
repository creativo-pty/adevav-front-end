'use strict';

module.exports = (ngModule) => {
  ngModule.run(routeChange);

  routeChange.$inject = ['$rootScope', '$state', 'AuthService'];

  function routeChange($rootScope, $state, AuthService) {
    $rootScope.$watch(() => $state.current, ({ name }) => {
      if (name.includes('admin') && !AuthService.isLoggedIn()) {
        return $state.go('index.login');
      }
      if (name === 'index.login' && AuthService.isLoggedIn()) {
        // TODO: Change to Admin Home Page when created
        return $state.go('admin.users.list');
      }
    });
  };
};
