'use strict';
module.exports = (ngModule) => {
  // Load modules within this file by requiring it and passing the ngModule explicitly
  require('./aboutUs')(ngModule);
  require('./associates')(ngModule);
  require('./blog')(ngModule);
  require('./contactUs')(ngModule);
  require('./home')(ngModule);
  require('./login')(ngModule);
  require('./posts')(ngModule);
  require('./projects')(ngModule);
  require('./users')(ngModule);
};
