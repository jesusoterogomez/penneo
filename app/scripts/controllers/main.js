'use strict';

/**
 * @ngdoc function
 * @name penneoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the penneoApp
 */
 angular.module('penneoApp')
 .controller('MainCtrl', function ($scope, fileService) {

 	fileService.list().then(function (response) {
 		$scope.files = response.data;
 	});
 	
 });
