'use strict';

module.exports = (ngModule) => {
  ngModule.config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('public', {
      abstract: true,
      url: '',
      views: {
        header: {
          template: require('../../partials/header/header.view.html'),
          controller: 'headerCtrl',
          controllerAs: 'vm'
        },
        content: {
          template: '<ui-view />'
        },
        footer: {
          template: require('../../partials/footer/footer.view.html'),
          controller: 'footerCtrl',
          controllerAs: 'vm'
        }
      }
    })
    .state('public.home', {
      url: '/',
      template: require('../../modules/home/home.view.html'),
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .state('public.about-us', {
      url: '/about-us',
      template: require('../../modules/aboutUs/aboutUs.view.html'),
      controller: 'aboutUsCtrl',
      controllerAs: 'vm'
    });
  }
};
