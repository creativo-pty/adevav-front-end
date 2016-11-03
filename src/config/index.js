'use strict';

module.exports = (ngModule) => {
  // Load configuration files within this file by requiring it and passing the ngModule explicitly
  require('./RequestInjector')(ngModule);
  require('./routes')(ngModule);
  require('./theme')(ngModule);
};
