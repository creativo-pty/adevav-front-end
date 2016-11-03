'use strict';

module.exports = (ngModule) => {
  ngModule.controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$http', '$state', 'Auth', 'AuthService', 'toaster', 'ValidatorService'];

  function loginCtrl($http, $state, Auth, AuthService, toaster, ValidatorService) {
    this.user = {};

    this.login = () => {
      const formInputs = [{
        type: 'email',
        value: this.user.email
      }, {
        type: 'input',
        value: this.user.password
      }];

      if (ValidatorService.isFormValid(formInputs)) {
        Auth.post(this.user).$promise
        .then(({ error, token, user }) => {
          if (!error) {
            AuthService.login(token, user);
            // TODO: Change to Admin Home Page when created
            return $state.go('admin.users.list');
          }
        });
      }
    };
  }
};
