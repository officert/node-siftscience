const should = require('should');

let SiftScience;

before(() => {
  SiftScience = require('lib');
});

describe('siftScience', () => {
  describe('init', () => {
    describe('when no key is passed', () => {
      it('should throw an error', () => {
        should(() => {
          SiftScience.init();
        }).throw('key is required');
      });
    });
  });
});
