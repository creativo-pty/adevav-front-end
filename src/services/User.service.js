'use strict';

module.exports = (ngModule) => {
  ngModule.service('UserService', UserService);

  UserService.$inject = ['toaster', 'User', 'FormatorService'];

  function UserService(toaster, User, FormatorService) {

    function createUser(user) {
      return User.create(user).$promise;
    }

    function getUser(userId) {
      return User.get({ userId }).$promise
      .then(FormatorService.user);
    }

    function isAssociate(user) {
      return user.isAssociate;
    }

    function listAssociates() {
      return User.list().$promise
      .then((users) => {
        return FormatorService.users(users.filter(isAssociate));
      })
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    function listUsers() {
      return User.list().$promise
      .then(FormatorService.users)
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    function updateUser(userId, user) {
      delete user.$promise;
      delete user.$resolved;
      delete user.fullName;

      return User.update({ userId }, user).$promise
      .then(FormatorService.user);
    }

    return {
      createUser,
      getUser,
      listAssociates,
      listUsers,
      updateUser
    };
  }
};
