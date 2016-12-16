'use strict';

module.exports = (ngModule) => {
  ngModule.controller('usersListCtrl', usersListCtrl);

  usersListCtrl.$inject = ['PermissionsService', 'users'];

  function usersListCtrl(PermissionsService, users) {
    this.permissionToCreate = PermissionsService.isUserAllowed('users', 'create');
    this.users = users;
  }
};
