'use strict';

module.exports = (ngModule) => {
  ngModule.controller('headerCtrl', headerCtrl);

  function headerCtrl() {
    this.blogName = 'ADEVAV';
  }
};
