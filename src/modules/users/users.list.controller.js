'use strict';

module.exports = (ngModule) => {
  ngModule.controller('usersListCtrl', usersListCtrl);

  usersListCtrl.$inject = ['PermissionsService', 'UserService'];

  function usersListCtrl(PermissionsService, UserService) {
    this.permission = PermissionsService.isUserAllowed;
    this.users = [];

    UserService.listUsers()
    .then((users) => {
      this.users = users;
    });
  }
};
