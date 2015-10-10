'use strict';

let helloWorld = function () {
  return 'Hello World!';
};

describe('First test', function () {

  it('should return a [ Hello World! ]', function () {
    expect(helloWorld()).to.equal('Hello World!');
  });

});

