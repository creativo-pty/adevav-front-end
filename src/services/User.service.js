'use strict';

module.exports = (ngModule) => {
  ngModule.service('UserService', UserService);

  UserService.$inject = ['toaster', 'User'];

  function UserService(toaster, User) {

    function attach(user) {
      return Object.assign({}, user, {
        avatar: user.avatar || require('../img/anonymous.png'),
        fullName: `${user.firstName} ${user.lastName}`
      });
    }

    function createUser(user) {
      return User.create(user).$promise;
    }

    function getUser(userId) {
      return User.get({ userId }).$promise
      .then((user) => attach(user));
    }

    function isAssociate(user) {
      return user.isAssociate;
    }

    function listAssociates() {
      return User.list().$promise
      .then((users) => {
        return users.filter(isAssociate).map(attach);
      })
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    function listUsers() {
      return User.list().$promise
      .then((users) => {
        return users.map(attach);
      })
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    function updateUser(userId, user) {
      delete user.$promise;
      delete user.$resolved;
      delete user.fullName;

      return User.update({ userId }, user).$promise
      .then((user) => attach(user));
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
