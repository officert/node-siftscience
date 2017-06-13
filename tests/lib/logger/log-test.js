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
    describe('log', () => {
      afterEach(() => {
        sandbox.restore();
      });

      describe('when logger is not in debug mode', () => {
        let logger;
        let logStub;
        let message = 'FOOBAR';

        before('create logger', () => {
          logger = new Logger();
        });

        before('stub console.log()', () => {
          logStub = sandbox.stub(console, 'log');
        });

        it('should not call console.log()', () => {
          logger.log(message);

          logStub.callCount.should.equal(0);
        });
      });

      describe('when logger is in debug mode', () => {
        let logger;
        let logStub;
        let message = 'FOOBAR';

        before('create logger', () => {
          logger = new Logger({
            debugMode: true
          });
        });

        before('stub console.log()', () => {
          logStub = sandbox.stub(console, 'log');
        });

        it('should call console.log()', () => {
          logger.log(message);

          logStub.callCount.should.equal(1);
          logStub.args[0][0].should.equal(message);
        });
      });
    });
  });
});
