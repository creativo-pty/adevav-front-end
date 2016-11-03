'use strict';

module.exports = (ngModule) => {
  // Load factories within this file by requiring it and passing the ngModule explicitly
  require('./Auth.factory')(ngModule);
  require('./SessionInjector.factory')(ngModule);
  require('./User.factory')(ngModule);
};
