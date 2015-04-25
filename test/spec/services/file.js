'use strict';

describe('Service: fileService', function () {

  // load the service's module
  beforeEach(module('penneoApp'));

  // instantiate service
  var file;
  beforeEach(inject(function (_file_) {
    file = _file_;
  }));

  it('should do something', function () {
    expect(!!file).toBe(true);
  });

});
