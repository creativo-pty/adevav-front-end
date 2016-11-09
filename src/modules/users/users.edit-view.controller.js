'use strict';

module.exports = (ngModule) => {
  ngModule.controller('usersEditViewCtrl', usersEditViewCtrl);

  usersEditViewCtrl.$inject = ['$state', 'originalUser', 'PermissionsService', 'UserService'];

  function usersEditViewCtrl($state, originalUser, PermissionsService, UserService) {
    this.showEditableButton = true;
    this.permission = PermissionsService.isUserAllowed;
    this.positions = [
      'Member',
      'Vocal',
      'Auditor',
      'Sub-Treasurer',
      'Treasurer',
      'Sub-Secretary',
      'Secretary',
      'Vice-President',
      'President'
    ];
    this.roles = [
      'Subscriber',
      'Contributor',
      'Author',
      'Editor',
      'Administrator'
    ];
    this.submitButtonText = 'Editar';
    this.title = `Edita el Perfíl de ${originalUser.fullName}`;

    this.originalUser = Object.assign({}, originalUser);
    this.user = Object.assign({}, originalUser);

    this.resetForm = (form) => {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      this.user = Object.assign({}, this.originalUser);
    };

    this.submitForm = (form) => {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      UserService.updateUser(this.originalUser.id, this.user)
      .then((user) => {
        if (!user.error) {
          return $state.go('admin.users.list');
        }
      });
    };

    this.setAssociate = () => {
      if (this.user.isAssociate) {
        this.user.position = 'Member';
      } else {
        this.user.position = '';
        this.user.isPublic = false;
        this.user.biography = '';
      }
    };
  }
};
