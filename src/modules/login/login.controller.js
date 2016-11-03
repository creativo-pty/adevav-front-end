'use strict';

module.exports = (ngModule) => {
  ngModule.controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = [
    '$http',
    '$q',
    '$state',
    'Auth',
    'AuthService',
    'PermissionsService',
    'toaster',
    'ValidatorService'
  ];

  function loginCtrl(
    $http,
    $q,
    $state,
    Auth,
    AuthService,
    PermissionsService,
    toaster,
    ValidatorService
  ) {

    this.credentials = {};

    this.login = () => {
      const formInputs = [{
        type: 'email',
        value: this.credentials.email
      }, {
        type: 'input',
        value: this.credentials.password
      }];

      if (ValidatorService.isFormValid(formInputs)) {
        Auth.login(this.credentials).$promise
        .then(({ error, token, user }) => {
          if (!error) {
            AuthService.login(token, user);
          }

          return (error) ? $q.reject() : PermissionsService.get();
        })
        .then((permissions) => {
          PermissionsService.set(permissions);

          // TODO: Change to Admin Home Page when created
          return $state.go('admin.users.list');
        });
      }
    };
  }
};
