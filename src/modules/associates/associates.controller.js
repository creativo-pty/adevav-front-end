'use strict';

module.exports = (ngModule) => {
  ngModule.controller('associatesCtrl', associatesCtrl);

  associatesCtrl.$inject = ['UserService'];

  function associatesCtrl(UserService) {
    this.associates = [];

    UserService.listAssociates()
    .then((associates) => {
      this.associates = associates;
    });
  }
};
