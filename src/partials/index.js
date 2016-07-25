'use strict';

module.exports = (ngModule) => {
  require('./content')(ngModule);
  require('./footer')(ngModule);
  require('./header')(ngModule);
};
