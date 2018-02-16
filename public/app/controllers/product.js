'use strict';

angular.module('movme').controller('Go2Ctrl',

  ['$scope',

    function ($scope) {

    	$scope.color = 'black'

    	$scope.setColor = function (color) {
    		$scope.color = color;
    	}

    }]);