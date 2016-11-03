'use strict';

module.exports = (ngModule) => {
  ngModule.controller('usersListCtrl', usersListCtrl);

  usersListCtrl.$inject = ['UserService'];

  function usersListCtrl(UserService) {
    this.users = [];

    UserService.listUsers()
    .then((users) => {
      this.users = users;
    });
  }
};
