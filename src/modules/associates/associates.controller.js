'use strict';

module.exports = (ngModule) => {
  ngModule.controller('associatesCtrl', associatesCtrl);

  associatesCtrl.$inject = ['associates'];

  function associatesCtrl(associates) {
    this.associates = associates;
  }
};
