'use strict';

// Load CSS
require('./less/index.less');

const angular = require('angular');

// Require angular libraries
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-resource');
require('angular-ui-router');

// Require other libraries
require('angularjs-toaster');
require('ngstorage');

// Require modules from Bootstrap
const carousel = require('angular-ui-bootstrap/src/carousel');
const tabs = require('angular-ui-bootstrap/src/tabs');

const ngModule = angular.module('adevavFrontEnd', [
  'ngMaterial',
  'ngResource',
  'ngStorage',
  'toaster',
  'ui.router',
  carousel,
  tabs
]);

// Load configuration files
require('./config')(ngModule);

// Load directives
require('./directives')(ngModule);

// Load factories
require('./factories')(ngModule);

// Load filters
require('./filters')(ngModule);

// Load modules
require('./modules')(ngModule);

// Load partial controllers
require('./partials')(ngModule);

// Load services
require('./services')(ngModule);

module.exports = ngModule;
