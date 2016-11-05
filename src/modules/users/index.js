'use strict';
module.exports = (ngModule) => {
  require('./users.create.controller')(ngModule);
  require('./users.list.controller')(ngModule);
};
