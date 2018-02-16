'use strict';

angular.module('movme').factory('$Rest', ['$http', '$Base64', function ($http, $Base64) {

      var k = ':';
      var basic = 'Basic ' + $Base64.encode(k);

      return function (options) {

        options = options || {};
        options.api_url = options.api_url || 'https://gomovme.com/api/';

        var request = function (method, action, input, headers) {

          return $http({
            method: method,
            url: (options.api_url + action),
            headers: headers || {
              'Content-Type': 'application/json',
              'Authorization': basic
            },
            data: (method.toUpperCase() !== 'GET' ? input : {}),
            params: (method.toUpperCase() === 'GET' ? input : {})
          });

        };

        // Public Interface
        return {

	        'get': function (action, input, headers) {
	        	return request('get', action, input, headers);
	        },

	        'post': function (action, input, headers) {
	            return request('post', action, input, headers);
	        },

	        'put': function (action, input, headers) {
	            return request('put', action, input, headers);
	        },

	        'delete': function (action, input, headers) {
	            return request('delete', action, input, headers);
	        }

        }

      };

    }
  ]);
