angular.module('movme', [

    // Angular framework modules
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'ngAria',
    'ngAnimate',
    'ngMessages',
    'ngMaterial'

  ])

  .config(function ($routeProvider, $locationProvider) {

    // Routes configuration
    $routeProvider

      .when('/', {
        templateUrl: '/app/views/pages/home.html',
        controller: 'HomeCtrl'
      })

      .when('/comprar', {
        templateUrl: '/app/views/pages/checkout.html',
        controller: 'CheckoutCtrl'
      })

      .when('/go2', {
        templateUrl: '/app/views/pages/product.html',
        controller: 'Go2Ctrl'
      })

      .when('/nossa-historia', {
        templateUrl: '/app/views/pages/about.html',
        controller: ''
      })

      .when('/faq', {
        templateUrl: '/app/views/pages/faq.html',
        controller: 'FAQCtrl'
      })

      .otherwise('/', {
        templateUrl: '/app/views/pages/home.html',
        controller: 'HomeCtrl'
      });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

  });
