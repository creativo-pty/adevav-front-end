'use strict';

module.exports = (ngModule) => {
  ngModule.controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$http', '$location', 'AuthService', 'ValidatorService'];

  function loginCtrl($http, $location, AuthService, ValidatorService) {
    this.user = {
      email: '',
      password: ''
    };

    this.login = () => {
      const formInputs = [{
        type: 'email',
        value: this.user.email
      }, {
        type: 'input',
        value: this.user.password
      }];

      if (ValidatorService.isFormValid(formInputs)) {
        AuthService.login(this.user);
      }
    };
  }
};
