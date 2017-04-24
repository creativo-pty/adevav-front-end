'use strict';

module.exports = (ngModule) => {
  ngModule.controller('postsCreateCtrl', postsCreateCtrl);

  postsCreateCtrl.$inject = ['$state', 'PostService'];

  function postsCreateCtrl($state, PostService) {
    this.editable = true;
    this.statuses = [
      'Draft',
      'Pending Review',
      'Published'
    ];
    this.submitButtonText = 'Crear';
    this.title = 'Crear Entrada';
    this.visibilities = [
      'Administrator',
      'Editor',
      'Author',
      'Contributor',
      'Subscriber',
      'Private',
      'Public'
    ];

    this.post = {
      status: 'Draft',
      visibility: 'Public',
      publishedOn: new Date()
    };

    this.resetForm = (form) => {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      this.post = {
        status: 'Draft',
        visibility: 'Public',
        publishedOn: this.post.publishedOn
      };
    };

    this.submitForm = (form) => {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }

      PostService.createPost(this.post)
      .then((post) => {
        if (!post.error) {
          return $state.go('admin.posts.list');
        }
      });
    };
  }
};
