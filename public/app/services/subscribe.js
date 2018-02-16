'use strict';

angular.module('movme').service('$Subscribe', ['$Rest', '$q', function ($Rest, $q) {

      var $rest = new $Rest();

      return {

        email: function (email) {
          var q = $q.defer();
          $rest
            .post('subscribe', {email: email})
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
        }

      }

    }
  ]);
