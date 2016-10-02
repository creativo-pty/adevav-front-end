'use strict';

module.exports = (ngModule) => {
  ngModule.controller('headerCtrl', headerCtrl);

  headerCtrl.$inject = ['$state'];

  function headerCtrl($state) {

    this.activeTab = 'public.about-us';
    this.blogName = 'ADEVAV';
  }
};
