'use strict';

angular.module('movme').controller('FooterCtrl',

  ['$scope', '$Subscribe', '$mdDialog',

    function ($scope, $Subscribe, $mdDialog) {

    	$scope.input = {};
    	$scope.input.email = '';

    	$scope.loadingBtn = false;

    	$scope.subscribe = function (email) {

    		if(!email)
    			return;

    		$scope.loadingBtn = true;
    		
    		$Subscribe.email(email).then(function(res) {
    			$scope.loadingBtn = false;
    			$scope.input.email = '';
    			$mdDialog.show(
			      $mdDialog.alert()
			        .parent(angular.element(document.body))
			        .clickOutsideToClose(true)
			        .title('Recebemos o seu e-mail')
			        .textContent('Fique de olho nas novidades')
			        .ariaLabel('Subscribed')
			        .ok('Obrigado!')
			    );
    		}, function(err) {
    			$scope.loadingBtn = false;
    			$mdDialog.show(
			      $mdDialog.alert()
			        .parent(angular.element(document.body))
			        .clickOutsideToClose(true)
			        .title('Opa! Algo inesperado ocorreu.')
			        .textContent('Tente novamente')
			        .ariaLabel('Not subscribed')
			        .ok('Fechar')
			    );
    		});

    	};

    }
  ]
);