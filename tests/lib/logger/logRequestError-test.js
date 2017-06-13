// const should = require('should');
const sinon = require('sinon');

let Logger;

let sandbox;

before(() => {
  Logger = require('../../../lib/logger');

  sandbox = sinon.sandbox.create();
});

describe('lib', () => {
  describe('logger', () => {
    describe('logRequestError', () => {
      afterEach(() => {
        sandbox.restore();
      });

      describe('when logger is not in debug mode', () => {
        let logger;
        let logStub;
        let error = {
          message : 'FOOBAR'
        };

        before('create logger', () => {
          logger = new Logger();
        });

        before('stub console.log()', () => {
          logStub = sandbox.stub(console, 'log');
        });

        it('should not call console.log()', () => {
          logger.logRequestError(error);

          logStub.callCount.should.equal(0);
        });
      });

      describe('when logger is in debug mode', () => {
        let logger;
        let logStub;
        let error = {
          message : 'FOOBAR'
        };

        before('create logger', () => {
          logger = new Logger({
            debugMode: true
          });
        });

        before('stub console.log()', () => {
          logStub = sandbox.stub(console, 'log');
        });

        it('should call console.log()', () => {
          logger.logRequestError(error);

          logStub.callCount.should.equal(3);
          logStub.args[0][0].should.equal('SIFT SCIENCE ERROR RESPONSE');
        });
      });
    });
  });
});
