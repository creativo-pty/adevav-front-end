'use strict';

module.exports = (ngModule) => {
  ngModule.controller('postsListCtrl', postsListCtrl);

  postsListCtrl.$inject = ['PermissionsService', 'posts'];

  function postsListCtrl(PermissionsService, posts) {
    this.permissionToCreate = PermissionsService.isUserAllowed('posts', 'create');
    this.posts = posts;
  }
};
