const should = require('should');

let SiftScience;
let SiftScienceClient;

before(() => {
  SiftScience = require('lib');
  SiftScienceClient = require('lib/client');
});

describe('siftScience', () => {
  describe('factory', () => {
    describe('init', () => {
      describe('when no key is passed', () => {
        it('should throw an error', () => {
          should(() => {
            SiftScience.init();
          }).throw('key is required');
        });
      });

      describe('when a key is passed', () => {
        const key = '123';
        it('should return an instance of SiftScienceClient', () => {
          const client = SiftScience.init(key);

          should.exist(client);
          client.should.be.instanceOf(SiftScienceClient);
        });
      });
    });
  });
});
