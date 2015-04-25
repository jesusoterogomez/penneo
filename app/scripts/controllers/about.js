'use strict';

/**
 * @ngdoc function
 * @name penneoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the penneoApp
 */
angular.module('penneoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
