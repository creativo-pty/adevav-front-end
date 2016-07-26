'use strict';

module.exports = (ngModule) => {
  // Load filters used across the application
  require('./toString.filter')(ngModule);
};
