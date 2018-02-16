'use strict';

angular.module('movme').controller('MenuCtrl',

  ['$scope', '$timeout', '$mdSidenav',

    function ($scope, $timeout, $mdSidenav) {

    	$scope.close = function () {
	      	$mdSidenav('left').close()
	        .then(function () {
	          // callback on close
	        });
	    };

    }
  ]
);