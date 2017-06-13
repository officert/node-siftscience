const should = require('should');
const Promise = require('bluebird');
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
      describe('delete', () => {
        let httpClient;

        before('create httpClient instance', () => {
          httpClient = new HttpClient('baseURL');
        });

        afterEach(() => {
          sandbox.restore();
        });

        describe('when no path is passed', () => {
          let path = null;
          let expectedResponse = {};

          let deleteStub;

          before('stub httpClient._client.delete()', () => {
            deleteStub = sandbox.stub(httpClient._client, 'delete')
              .returns(Promise.resolve(expectedResponse));
          });

          it('should reject with an error', () => {
            return httpClient.delete(path)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('path is required');

                deleteStub.callCount.should.equal(0);
              });
          });
        });

        describe('when a path is passed', () => {
          let path = '/foobar';
          let expectedResponse = {};

          let deleteStub;

          before('stub httpClient._client.delete()', () => {
            deleteStub = sandbox.stub(httpClient._client, 'delete')
              .returns(Promise.resolve(expectedResponse));
          });

          it('should resolve and call httpClientClient._client.delete()', () => {
            return httpClient.delete(path)
              .then(response => {
                should.exist(response);
                response.should.deepEqual(expectedResponse);

                deleteStub.callCount.should.equal(1);
                deleteStub.args[0][0].should.equal(path);
              });
          });
        });

        describe('when params are passed', () => {
          let path = '/foobar';
          let params = {
            query: 'string'
          };
          let expectedResponse = {};

          let deleteStub;

          before('stub httpClient._client.delete()', () => {
            deleteStub = sandbox.stub(httpClient._client, 'delete')
              .returns(Promise.resolve(expectedResponse));
          });

          it('should resolve and call httpClientClient._client.delete()', () => {
            return httpClient.delete(path, params)
              .then(response => {
                should.exist(response);
                response.should.deepEqual(expectedResponse);

                deleteStub.callCount.should.equal(1);
                deleteStub.args[0][0].should.equal(path);
                deleteStub.args[0][1].should.deepEqual({
                  params
                });
              });
          });
        });
      });
    });
  });
});
