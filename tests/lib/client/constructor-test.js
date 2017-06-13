const should = require('should');

let SiftScienceClient;

before(() => {
  SiftScienceClient = require('../../../lib/client');
});

describe('lib', () => {
  describe('client', () => {
    describe('constructor', () => {
      describe('when no key is passed', () => {
        it('should throw an error', () => {
          should(() => {
            new SiftScienceClient();
          }).throw('key is required');
        });
      });
    });
  });
});
