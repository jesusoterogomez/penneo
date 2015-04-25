'use strict';

/**
 * @ngdoc service
 * @name penneoApp.config
 * @description
 * # config
 * Service in the penneoApp.
 */
angular.module('penneoApp')
  .constant('ENV', {
  	filesData: 'assets/json/data.json',
  	statusData: 'assets/json/status.json'
  });