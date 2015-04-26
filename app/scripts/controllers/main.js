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
 	$scope.itemsByPage = 4;

 	fileService.list().then(function (response) {
 		getStatusNames(response.data); 
 		$scope.list = response.data;
 		$scope.displayedList = response.data;
 	});

 	function getStatusNames (list) {
 		fileService.getStatus().then(function (response){
 			for (var i = 0; i < list.length; i++) {
 				list[i].statusName = response[list[i].status];
 			};
 		});
 		
 	}

 });
