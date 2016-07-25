'use strict';

module.exports = (ngModule) => {
  require('./search-form.directive')(ngModule);
  require('./search-form.controller')(ngModule);
};
