'use strict';
module.exports = (ngModule) => {
  // Load modules within this file by requiring it and passing the ngModule explicitly
  require('./aboutUs')(ngModule);
  require('./home')(ngModule);
};
