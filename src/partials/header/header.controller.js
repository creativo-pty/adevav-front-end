'use strict';

module.exports = (ngModule) => {
  ngModule.controller('headerCtrl', headerCtrl);

  function headerCtrl() {

    this.activeTab = -1;
    this.blogName = 'ADEVAV';
    this.setActiveTab = setActiveTab;

    function setActiveTab(index) {
      this.activeTab = index;
    }
  }
};
