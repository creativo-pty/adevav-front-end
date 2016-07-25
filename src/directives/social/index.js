'use strict';

module.exports = (ngModule) => {
  require('./social.directive')(ngModule);
  require('./social.controller')(ngModule);
};
