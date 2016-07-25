'use strict';

module.exports = (ngModule) => {
  require('./carousel.directive')(ngModule);
  require('./carousel.controller')(ngModule);
};
