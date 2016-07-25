'use strict';

module.exports = (ngModule) => {
  require('./navigate.directive')(ngModule);
  require('./navigate.controller')(ngModule);
};
