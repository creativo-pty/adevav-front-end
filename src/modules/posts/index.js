'use strict';

module.exports = (ngModule) => {
  require('./posts.create.controller')(ngModule);
  require('./posts.list.controller')(ngModule);
};
