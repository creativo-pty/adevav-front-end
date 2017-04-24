'use strict';

module.exports = (ngModule) => {
  ngModule.factory('Post', Post);

  Post.$inject = ['$resource'];

  const BASE_PATH = ADEVAV_BACKEND + 'posts';

  function Post($resource) {
    return $resource(BASE_PATH, {}, {
      create: {
        method: 'POST'
      },
      list: {
        method: 'GET',
        isArray: true
      }
    });
  }
};
