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

 	// Default Scope Variables
 	$scope.list = [];
 	$scope.itemsByPage = 4; // show 3 pages for testing purposes.

 	// Get List of Files
 	fileService.list().then(function (response) {
 		getStatusNames(response.data); 
 		$scope.list = response.data;
 		$scope.displayedList = response.data;
 	});

 	// Get Status of each entry in list.
 	function getStatusNames (list) {

 		fileService.getStatus().then(function (response){
 			for (var i = 0; i < list.length; i++) {
 				list[i].statusName = response[list[i].status];
 			};
 		});
 	}

 	// Toggle Mobile Drawer Sidebar.
 	$scope.mobileDrawer = function (event) {
 		event.preventDefault();
 		$('.nav').toggleClass('open');
 		$('.toggleOverlay').fadeToggle(300);
 	}

 	// Hide Mobile Drawer on Menu Selection
 	$scope.menuSelection = function (event) {
 		$('.nav').removeClass('open');
 		$('.toggleOverlay').fadeOut(300);
 	}

 });
