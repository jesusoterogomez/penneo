'use strict';

// Mocked Service
angular.module('mock.fileService', []).
factory('fileService', function ($q) {
    var fileService = {};

    fileService.getStatus = function(i) {
        var mockStatus = ['one','two','three','four','five'];
        return $q.when(mockStatus);
    };

        // example stub method that returns a promise, e.g. if original method returned $http.get(...)
        fileService.list = function() {
            var mockList = {  
                 "data":[  
                 {  
                   "id":2260,
                   "type":"document",
                   "title":"Employment Contract",
                   "status":0,
                   "created":"1429620101",
                   "modified":"1429422001"
               },
               {  
                   "id":2261,
                   "type":"folder",
                   "title":"Annual Reports",
                   "status":0,
                   "created":"1429620001",
                   "modified":"1429420001"
               }
               ]
           };
            return $q.when(mockList);
        };

        return fileService;
    });

