'use strict';

module.exports = (ngModule) => {
  ngModule.controller('usersListCtrl', usersListCtrl);

  usersListCtrl.$inject = ['PermissionsService', 'users'];

  function usersListCtrl(PermissionsService, users) {
    this.permission = PermissionsService.isUserAllowed;
    this.users = users;
  }
};
