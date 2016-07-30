'use strict';

module.exports = (ngModule) => {
  require('./sidebar.controller')(ngModule);
  require('./sidebar.directive')(ngModule);
};
