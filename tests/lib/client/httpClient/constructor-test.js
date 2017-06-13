const should = require('should');
const sinon = require('sinon');

let HttpClient;
let sandbox;

before(() => {
  HttpClient = require('../../../../lib/client/httpClient');

  sandbox = sinon.sandbox.create();
});

describe('lib', () => {
  describe('client', () => {
    describe('httpClient', () => {
      describe('constructor', () => {
        afterEach(() => {
          sandbox.restore();
        });

        describe('when no baseURL is passed', () => {
          let baseURL = null;

          it('should reject with an error', () => {
            should(() => {
              new HttpClient(baseURL);
            }).throw('baseURL is required');
          });
        });
      });
    });
  });
});
