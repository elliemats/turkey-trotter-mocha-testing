/* global , describe, it, expect, should */

describe('turkey()', function () {
  'use strict';

  it('should be a function', function () {
    expect(turkey).to.be.a('function');

  });

  it('should return "gobble" when called', function () {
    expect(turkey()).to.equal('gobble');
  });

  it('should return a string', function () {
    expect(typeof turkey()).to.equal('string');
  });

  // Add more assertions here
});