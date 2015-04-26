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

  it('fileService should be defined.', function () {
    expect(fs).toBeDefined();
  });
  
  it('fileService should be defined.', function () {
    // expect(userService).toBeDefined();
    //expect(fileService).list()\
    //
  });

  it('should start with an empty list added to the scope.', function () {
    expect(scope.list.length).toBe(0);
  });

  it('should start with an empty list added to the scope.', function (done) {
    scope.$apply();

    fs.list().then(function (response) {
      console.log(response);
      // expect(response.data).toBeGreaterThan(0);
      done();
    });
    scope.$apply();
    
  });

  });