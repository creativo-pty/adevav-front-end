'use strict';

module.exports = (ngModule) => {
  ngModule.service('FormatorService', FormatorService);

  function FormatorService() {

    function post(post) {
      return {
        id: post.id,
        title: post.title,
        slug: post.slug,
        body: post.body,
        status: post.status,
        visibility: post.visibility,
        publishedOn: (post.publishedOn) ? moment(post.publishedOn).format('YYYY/MM/DD hh:mmA') : '',
        author: user(post.author)
      };
    }

    function posts(posts) {
      return posts.map(post);
    }

    function user(user) {
      const base = {
        id: user.id,
        email: user.email,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        fullName: `${user.firstName} ${user.lastName}`.trim(),
        avatar: user.avatar || require('../img/anonymous.png'),
        role: user.role,
        isAssociate: user.isAssociate
      };

      if (user.isAssociate) {
        base.position = user.position;
        base.biography = user.biography || '';
        base.isPublic = user.isPublic;
      }

      return base;
    }

    function users(users) {
      return users.map(user);
    }

    return {
      posts,
      user,
      users
    };
  }
};
