'use strict';

module.exports = (ngModule) => {
  // Load services within this file by requiring it and passing the ngModule explicitly
  require('./Auth.service')(ngModule);
  require('./Validator.service')(ngModule);
};
