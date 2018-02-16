'use strict';

angular.module('movme').controller('BodyCtrl',

  ['$rootScope', '$location', '$timeout', '$mdSidenav', '$smoothScroll',

    function ($rootScope, $location, $timeout, $mdSidenav, $smoothScroll) {

      // Initialize WOW plugin
      new WOW().init();

      // Navigates to path p
      $rootScope.path = function (p) {
        return $location.path(p);
      };

      // Sidenav methods
      $rootScope.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }

      // Smooth Scroll
      $rootScope.goToElement = function (id) {
          $smoothScroll.scrollTo(id);
      };

    }
  ]
);

function preloader() {
  var preloader = document.getElementById('preloader');
  setTimeout(function () {
    preloader.className = 'hidden';
  }, 0);
};
