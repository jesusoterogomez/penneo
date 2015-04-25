'use strict';

/**
 * @ngdoc service
 * @name penneoApp.file
 * @description
 * # file
 * Service in the penneoApp.
 */
 angular.module('penneoApp')
 .service('fileService', function ($http, ENV) {

 	return ({
 		list:list, 
 		getStatus:getStatus
 	});

 	function list () {
 		var request = $http.get(ENV.filesData);

 		return request.then(
 			function(response) {
 				return response.data;
 			},
 			function(data, status) {
 				return {error: data, status: status};
 			});
 	}

 	function getStatus (status) {

 		return status;
 	}

 });

