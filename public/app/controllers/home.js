'use strict';

angular.module('movme').controller('HomeCtrl',

  ['$scope', '$mdDialog',

    function ($scope, $mdDialog) {

    	$scope.openVideo = function (ev) {
    		$mdDialog.show({
		      	controller: DialogController,
		      	templateUrl: '/app/views/components/video.html',
		      	parent: angular.element(document.body),
		      	targetEvent: ev,
		      	clickOutsideToClose: true,
		      	fullscreen: false
		    });
    	};

	    function DialogController($scope, $mdDialog) {

		    $scope.hide = function () {
		      	$mdDialog.hide();
		    };

		    $scope.cancel = function () {
		      	$mdDialog.cancel();
		    };

		}


    }
  ]
);