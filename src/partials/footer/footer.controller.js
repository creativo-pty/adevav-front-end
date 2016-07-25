'use strict';

module.exports = (ngModule) => {
  ngModule.controller('footerCtrl', footerCtrl);

  function footerCtrl() {
    this.projects = [];
    this.articles = [{
      title: 'Reseña Histórica'
    }];
    this.portalAccess = false;

    this.goTo = goTo;

    function goTo() {

    }
  }
};
