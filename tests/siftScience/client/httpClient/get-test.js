const should = require('should');
const Promise = require('bluebird');
const sinon = require('sinon');

let httpClient;
let sandbox;

before(() => {
  httpClient = require('lib/client/httpClient');

  sandbox = sinon.sandbox.create();
});

describe('siftScience', () => {
  describe('client', () => {
    describe('httpClient', () => {
      describe('get', () => {
        afterEach(() => {
          sandbox.restore();
        });

        describe('when no path is passed', () => {
          let path = null;
          let expectedResponse = {};

          let getStub;

          before('stub httpClient.get()', () => {
            getStub = sandbox.stub(httpClient.v204Client, 'get')
              .returns(Promise.resolve(expectedResponse));
          });

          it('should reject with an error', () => {
            return httpClient.get(path)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('path is required');

                getStub.callCount.should.equal(0);
              });
          });
        });

        describe('when a path is passed', () => {
          let path = '/foobar';
          let expectedResponse = {};

          let getStub;

          before('stub httpClient.get()', () => {
            getStub = sandbox.stub(httpClient.v204Client, 'get')
              .returns(Promise.resolve(expectedResponse));
          });

          it('should resolve and call v204Client.get()', () => {
            return httpClient.get(path)
              .then(response => {
                should.exist(response);
                response.should.deepEqual(expectedResponse);

                getStub.callCount.should.equal(1);
                getStub.args[0][0].should.equal(path);
              });
          });
        });

        describe('when params are passed', () => {
          let path = '/foobar';
          let params = {
            query: 'string'
          };
          let expectedResponse = {};

          let getStub;

          before('stub httpClient.get()', () => {
            getStub = sandbox.stub(httpClient.v204Client, 'get')
              .returns(Promise.resolve(expectedResponse));
          });

          it('should resolve and call v204Client.get()', () => {
            return httpClient.get(path, params)
              .then(response => {
                should.exist(response);
                response.should.deepEqual(expectedResponse);

                getStub.callCount.should.equal(1);
                getStub.args[0][0].should.equal(path);
                getStub.args[0][1].should.deepEqual({
                  params
                });
              });
          });
        });
      });
    });
  });
});
