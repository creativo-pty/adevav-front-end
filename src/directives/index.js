'use strict';

module.exports = (ngModule) => {
  // Load directives within this file by requiring it and passing the ngModule explicitly
  require('./carousel')(ngModule);
  require('./search-form')(ngModule);
  require('./social')(ngModule);
};
