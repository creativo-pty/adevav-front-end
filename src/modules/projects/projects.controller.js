'use strict';

module.exports = (ngModule) => {
  ngModule.controller('projectsCtrl', projectsCtrl);

  function projectsCtrl() {
    this.projects = [];
  }
};
