'use strict';

describe('Controller: MainCtrl', function ($rootScope) {

  // load the controller's module
  beforeEach(module('penneoApp'));

  var MainCtrl,
  scope, fs;
  beforeEach(module('mock.fileService'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _fileService_) {
    scope = $rootScope.$new();
    fs = _fileService_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      fileService: _fileService_
    });
  }));

  it('fileService should be attached to MainCtrl..', function () {
    expect(fs).toBeDefined();
    console.info('Test 1: fileService should be attached to MainCtrl.');

  });
  
  it('should start with an empty list added to the scope.', function () {
    expect(scope.list.length).toBe(0);
    console.info('Test 2: MainCtrl should start with an empty list added to scope');
  });

  it('fileService should return list of files on promise callback', function (done) {

    fs.list().then(function (response) {
      expect(response.data.length).toBeGreaterThan(0);
      console.info('Test 3: fileService should return list of files on promise callback');
      done();
    });

    scope.$apply(); //update scope promise callback

  });

  it('fileService should return list of statuses on promise callback', function (done) {

    fs.getStatus().then(function (response) {
      expect(response.length).toBeGreaterThan(0);
      console.info('Test 4: fileService should return list of statuses on promise callback');
      done();
    });

    scope.$apply(); //update scope promise callback

  });

});