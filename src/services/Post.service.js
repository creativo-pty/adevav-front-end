'use strict';

module.exports = (ngModule) => {
  ngModule.service('PostService', PostService);

  PostService.$inject = ['toaster', 'Post', 'FormatorService'];

  function PostService(toaster, Post, FormatorService) {

    function createPost(post) {
      return Post.create(post).$promise
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    function listPosts() {
      return Post.list().$promise
      .then(FormatorService.posts)
      .catch(({ data }) => {
        toaster.pop('error', data.error, data.message);
      });
    }

    return {
      createPost,
      listPosts
    };
  }
};
