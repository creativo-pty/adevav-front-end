'use strict';

module.exports = (ngModule) => {
  ngModule.controller('sidebarCtrl', sidebarCtrl);

  sidebarCtrl.$inject = ['$location'];

  function sidebarCtrl($location) {
    // TODO: Limit to a maximum of five posts.
    this.posts = [{
      title: 'Reseña Histórica',
      permalink: '/'
    }];
    // TODO: Limit to a maximum of five projects.
    this.projects = [];
    this.categories = [{
      title: 'Historia',
      permalink: '/'
    }];
    this.archives = [{
      title: 'Enero del 2016',
      permalink: '/'
    }];
    this.currentPage = $location.url();
  }
};
