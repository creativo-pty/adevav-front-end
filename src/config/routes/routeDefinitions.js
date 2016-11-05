'use strict';

module.exports = (ngModule) => {
  ngModule.config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('admin', {
      abstract: true,
      url: '/admin',
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
    .state('admin.logout', {
      url: '/logout',
      onEnter: function(AuthService) {
        return AuthService.logout();
      }
    })
    .state('admin.users', {
      abstract: true,
      url: '/users',
      template: '<ui-view/>'
    })
    .state('admin.users.create', {
      url: '/create',
      permissionRequired: 'users::create',
      template: require('../../modules/users/users.create.view.html'),
      controller: 'usersCreateCtrl',
      controllerAs: 'vm'
    })
    .state('admin.users.list', {
      url: '',
      template: require('../../modules/users/users.list.view.html'),
      controller: 'usersListCtrl',
      controllerAs: 'vm'
    })
    .state('index', {
      abstract: true,
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
    .state('index.home', {
      url: '/',
      template: require('../../modules/home/home.view.html'),
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .state('index.login', {
      url: '/login',
      template: require('../../modules/login/login.view.html'),
      controller: 'loginCtrl',
      controllerAs: 'vm'
    })
    .state('public', {
      abstract: true,
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
    .state('public.about-us', {
      url: '/about-us',
      template: require('../../modules/aboutUs/aboutUs.view.html'),
      controller: 'aboutUsCtrl',
      controllerAs: 'vm'
    })
    .state('public.associates', {
      url: '/associates',
      template: require('../../modules/associates/associates.view.html'),
      controller: 'associatesCtrl',
      controllerAs: 'vm'
    })
    .state('public.blog', {
      url: '/blog',
      template: require('../../modules/blog/blog.view.html'),
      controller: 'blogCtrl',
      controllerAs: 'vm'
    })
    .state('public.projects', {
      url: '/projects',
      template: require('../../modules/projects/projects.view.html'),
      controller: 'projectsCtrl',
      controllerAs: 'vm'
    })
    .state('public.contact-us', {
      url: '/contact-us',
      params: {
        associateId: 0
      },
      template: require('../../modules/contactUs/contactUs.view.html'),
      controller: 'contactUsCtrl',
      controllerAs: 'vm'
    });
  }
};
