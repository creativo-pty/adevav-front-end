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

    function isAssociate(user) {
      return user.isAssociate;
    }

    function listAssociates() {
      return User.get().$promise
      .then((users) => {
        return users.filter(isAssociate).map(attach);
      })
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    function listUsers() {
      return User.get().$promise
      .then((users) => {
        return users.map(attach);
      })
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    return {
      createUser,
      listAssociates,
      listUsers
    };
  }
};
