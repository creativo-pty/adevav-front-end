'use strict';

// Load CSS
require('./less/index.less');

const angular = require('angular');

// Require angular libraries
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-ui-router');

// Require the Carousel module from Bootstrap
const carousel = require('angular-ui-bootstrap/src/carousel');

const ngModule = angular.module('adevavFrontEnd', [
  'ngMaterial',
  'ui.router',
  carousel
]);

// Load partial controllers
require('./partials')(ngModule);

// Load configuration files
require('./config')(ngModule);

// Load directives
require('./directives')(ngModule);

module.exports = ngModule;
