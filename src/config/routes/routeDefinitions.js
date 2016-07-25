'use strict';

module.exports = (ngModule) => {
  ngModule.config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
      url: '/',
      views: {
        header: {
          template: require('../../partials/header/header.view.html'),
          controller: 'headerCtrl',
          controllerAs: 'vm'
        },
        content: {
          template: require('../../partials/content/content.view.html'),
          controller: 'contentCtrl',
          controllerAs: 'vm'
        },
        footer: {
          template: require('../../partials/footer/footer.view.html'),
          controller: 'footerCtrl',
          controllerAs: 'vm'
        }
      }
    });
  }
};
