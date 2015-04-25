'use strict';

/**
 * @ngdoc function
 * @name penneoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the penneoApp
 */
angular.module('penneoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
