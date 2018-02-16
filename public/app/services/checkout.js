'use strict';

angular.module('movme').service('$Checkout', ['$Rest', '$q', function ($Rest, $q) {

      var $rest = new $Rest();

      return {

        subscribe: function (data) {
          var q = $q.defer();
          $rest
            .post('subscribe', data)
            .then(function (response) {
              if (response && response.data) {
                q.resolve(response.data);
              } else {
                q.reject();
              }
            }, function (error) {
              q.reject(error);
            });

          return q.promise;
        },

        charge: function (data) {
          var q = $q.defer();
          $rest
            .post('charge', data)
            .then(function (response) {
              if (response && response.data) {
                if (response.data.success) {
                  q.resolve(response.data);
                } else {
                  q.reject(response.data);
                }
              } else {
                q.reject();
              }
            }, function (error) {
              q.reject(error);
            });

          return q.promise;
        }

      }

    }
  ]);
