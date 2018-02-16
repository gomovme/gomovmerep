'use strict';

angular.module('movme').controller('CheckoutCtrl',

  ['$scope', '$Checkout', '$mdDialog', '$http',

    function ($scope, $Checkout, $mdDialog, $http) {

        // Iugu
        Iugu.setAccountID('4093DF60F42C4BDC9720F8859DF08227');

        Iugu.setup();

        // States of Brazil
        $scope.states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

        // Loading var
    	$scope.loading = false;

        // Success callback controls
        $scope.checkedOut = false;
        $scope.bankUrl = false;
        $scope.cardUrl = false;
        $scope.bankPDF = false;
        $scope.cardPDF = false;

        $scope.input = {};

        function resetInput () {

            $scope.payment = {
                type: 'bank_slip',
                months: 1,
                quantity: 1,
                value: 2750
            };

            $scope.input = {
                items: [
                    {
                        description: 'Movme Go2',
                        quantity: 1,
                        price_cents: 275000
                    }
                ],
                email: '',
                payer: {
                    cpf_cnpj: '',
                    name: '',
                    firstName: '',
                    lastName: '',
                    phone_prefix: '',
                    phone: '',
                    email: '',
                    address: {
                        street: '',
                        number: '',
                        district: '',
                        city: '',
                        state: '',
                        zip_code: '',
                        complement: '',
                    }

                }
            };
        };

        $scope.setBank = function () {
            $scope.payment.value = 2750;
        }

        $scope.setCredit = function () {
            $scope.payment.value = 2990;
            $scope.payment.quantity = 1;
        }

        function validateCPF(cpf) {
            var sum;
            var rem;
            sum = 0;
            if (cpf == '00000000000') return false;        
            for (var i=1; i<=9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
            rem = (sum * 10) % 11;   
            if ((rem == 10) || (rem == 11))  rem = 0;
            if (rem != parseInt(cpf.substring(9, 10)) ) return false; 
            sum = 0;
            for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
            rem = (sum * 10) % 11;
            if ((rem == 10) || (rem == 11))  rem = 0;
            if (rem != parseInt(cpf.substring(10, 11) ) ) return false;
            return true;
        }

        function validateCEP(cep) {
            var cepUrl = 'https://viacep.com.br/ws/' + cep + '/json/';
            $http({
                method: 'GET',
                url: cepUrl
            }).then(function(res) {

                if (res.data && !res.data.erro)
                    return true;
                else
                    return false;

            }, function(err) {
                return false;
            });
        }

        jQuery(function($) {
            $('#payment-form').submit(function() {

                var form = $(this);
                var tokenResponseHandler = function(data) {

                    $scope.loading = true;
                  
                    if (data.errors) {
                        $scope.loading = false;
                        alert('Erro processando cartão: ' + JSON.stringify(data.errors));
                    } else {

                        if (!validateCPF($scope.input.payer.cpf_cnpj)) {
                            $scope.loading = false;
                            $mdDialog.show(
                                $mdDialog.alert()
                                    .parent(angular.element(document.body))
                                    .clickOutsideToClose(true)
                                    .title('CPF inválido')
                                    .textContent('Verifque o seu CPF. Caso esteja tendo problemas, entre em contato conosco pelo e-mail contato@gomovme.com')
                                    .ariaLabel('Not billed')
                                    .ok('Fechar')
                            );
                        } else {
                            var cardData = {
                                token: data.id,
                                months: $scope.payment.months,
                                items: [
                                    {
                                        description: 'Movme Go2',
                                        quantity: 1,
                                        price_cents: 299000
                                    }
                                ],
                                email: $scope.input.payer.email,
                                payer: {
                                    cpf_cnpj: $scope.input.payer.cpf_cnpj,
                                    name: $scope.input.payer.firstName + ' ' + $scope.input.payer.lastName,
                                    phone_prefix: $scope.input.payer.phone_prefix,
                                    phone: $scope.input.payer.phone,
                                    email: $scope.input.payer.email,
                                    address: {
                                        street: $scope.input.payer.address.street,
                                        number: $scope.input.payer.address.number,
                                        district: $scope.input.payer.address.district,
                                        city: $scope.input.payer.address.city,
                                        state: $scope.input.payer.address.state,
                                        zip_code: $scope.input.payer.address.zip_code,
                                        complement: $scope.input.payer.address.complement || '',
                                    }
                                }
                            };

                            $Checkout.charge(cardData).then(function(res) {
                                $scope.loading = false;
                                console.log(res);
                                $scope.cardUrl = res.url;
                                $scope.cardPDF = res.pdf;
                                $scope.checkedOut = true;
                                resetInput();
                                $mdDialog.show(
                                  $mdDialog.alert()
                                    .parent(angular.element(document.body))
                                    .clickOutsideToClose(true)
                                    .title('Pagamento efetuado com sucesso!')
                                    .textContent('Seu pagamento com cartão foi processado e confirmado com sucesso. Veja sua fatura.')
                                    .ariaLabel('Billed')
                                    .ok('Ver Fatura')
                                );
                            }, function(err) {
                                $scope.loading = false;
                                $mdDialog.show(
                                  $mdDialog.alert()
                                    .parent(angular.element(document.body))
                                    .clickOutsideToClose(true)
                                    .title('Opa! Algo inesperado ocorreu.')
                                    .textContent('Verifque seus dados e tente novamente. Caso esteja tendo problemas, entre em contato conosco pelo e-mail contato@gomovme.com')
                                    .ariaLabel('Not billed')
                                    .ok('Fechar')
                                );
                            });
                        }

                    }
                }
              
                Iugu.createPaymentToken(this, tokenResponseHandler);
                return false;
          });
        });

        $scope.order = function (payment, info) {

            $scope.loading = true;

            if (!validateCPF(info.payer.cpf_cnpj)) {
                $scope.loading = false;
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.body))
                        .clickOutsideToClose(true)
                        .title('CPF inválido')
                        .textContent('Verifque o seu CPF. Caso esteja tendo problemas, entre em contato conosco pelo e-mail contato@gomovme.com')
                        .ariaLabel('Not billed')
                        .ok('Fechar')
                );
            } else {

                var bankData = {
                    method: 'bank_slip',
                    items: [
                        {
                            description: 'Movme Go2',
                            quantity: payment.quantity || 1,
                            price_cents: 275000
                        }
                    ],
                    email: info.payer.email,
                    payer: {
                        cpf_cnpj: info.payer.cpf_cnpj,
                        name: info.payer.firstName + ' ' + info.payer.lastName,
                        phone_prefix: info.payer.phone_prefix,
                        phone: info.payer.phone,
                        email: info.payer.email,
                        address: {
                            street: info.payer.address.street,
                            number: info.payer.address.number,
                            district: info.payer.address.district,
                            city: info.payer.address.city,
                            state: info.payer.address.state,
                            zip_code: info.payer.address.zip_code,
                            complement: info.payer.address.complement || '',
                        }
                    }
                };

                $Checkout.charge(bankData).then(function(res) {
                    $scope.loading = false;
                    $scope.bankUrl = res.url;
                    $scope.bankPDF = res.pdf;
                    $scope.checkedOut = true;
                    resetInput();
                    $mdDialog.show(
                      $mdDialog.alert()
                        .parent(angular.element(document.body))
                        .clickOutsideToClose(true)
                        .title('Geramos o seu boleto!')
                        .textContent('Seu pagamento está pendente.')
                        .ariaLabel('Billed')
                        .ok('Ver Boleto')
                    );
                }, function(err) {
                    $scope.loading = false;
                    $mdDialog.show(
                      $mdDialog.alert()
                        .parent(angular.element(document.body))
                        .clickOutsideToClose(true)
                        .title('Opa! Algo inesperado ocorreu.')
                        .textContent('Verifque seus dados e tente novamente. Caso esteja tendo problemas, entre em contato conosco pelo e-mail contato@gomovme.com')
                        .ariaLabel('Not billed')
                        .ok('Fechar')
                    );
                });
            }
        }

        $scope.range = function(n) {
            var r = [];
            for (var i = 1; i <= n; i++) {
                r.push(i);
            }
            return r;
        }

        // Initialization
        resetInput();

	}]);