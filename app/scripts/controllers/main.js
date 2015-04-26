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
 	$scope.list = [];
 	$scope.itemsByPage = 10;

 	fileService.list().then(function (response) {
 		$scope.list = response.data;
 		$scope.displayedList = response.data;
 	});

 });
