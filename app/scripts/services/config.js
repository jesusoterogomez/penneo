'use strict';

/**
 * @ngdoc service
 * @name penneoApp.config
 * @description
 * # config
 * Service in the penneoApp.
 */
angular.module('penneoApp')
  .constant('ENV', function () {
  	filesData: '../assets/data.json',
  	statusData: '../assets/status.json',
  });
