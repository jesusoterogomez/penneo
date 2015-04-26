'use strict';

describe('Service: file', function () {

  // load the service's module
  beforeEach(module('penneoApp'));

  // instantiate service
  var file;
  beforeEach(inject(function (_fileService_) {
    file = _fileService_;
  }));

  it('fileService should be initialized', function () {
    expect(!!file).toBe(true);
  });

});
