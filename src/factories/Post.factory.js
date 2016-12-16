'use strict';

module.exports = (ngModule) => {
  ngModule.factory('Post', Post);

  Post.$inject = ['$resource'];

  const BASE_PATH = ADEVAV_BACKEND + 'posts';

  function Post($resource) {
    return $resource(BASE_PATH, {}, {
      list: {
        method: 'GET',
        isArray: true
      }
    });
  }
};
