'use strict';

module.exports = (ngModule) => {
  ngModule.service('PostService', PostService);

  PostService.$inject = ['toaster', 'Post', 'FormatorService'];

  function PostService(toaster, Post, FormatorService) {

    function listPosts() {
      return Post.list().$promise
      .then(FormatorService.posts)
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    return {
      listPosts
    };
  }
};
