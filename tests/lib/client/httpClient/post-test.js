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
      describe('post', () => {
        let httpClient;

        before('create httpClient instance', () => {
          httpClient = new HttpClient('baseURL');
        });

        afterEach(() => {
          sandbox.restore();
        });

        describe('when no path is passed', () => {
          let path = null;
          let response = {};

          let postStub;

          before('stub httpClient._client.post()', () => {
            postStub = sandbox.stub(httpClient._client, 'post')
              .returns(Promise.resolve(response));
          });

          it('should reject with an error', () => {
            return httpClient.post(path)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('path is required');

                postStub.callCount.should.equal(0);
              });
          });
        });

        describe('when a path is passed', () => {
          let path = '/foobar';
          let response = {};

          let postStub;

          before('stub httpClient.post()', () => {
            postStub = sandbox.stub(httpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should resolve and call httpClient._client.post()', () => {
            return httpClient.post(path)
              .then(response => {
                should.exist(response);
                response.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(path);
              });
          });
        });

        describe('when body is passed', () => {
          let path = '/foobar';
          let body = {
            key: 'value'
          };
          let response = {};

          let postStub;

          before('stub httpClient._client.post()', () => {
            postStub = sandbox.stub(httpClient._client, 'post')
              .returns(Promise.resolve(response));
          });

          it('should resolve and call httpClient._client.post()', () => {
            return httpClient.post(path, body)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(path);
                postStub.args[0][1].should.deepEqual(body);
              });
          });
        });

        describe('when params are passed', () => {
          let path = '/foobar';
          let body = {
            key: 'value'
          };
          let params = {
            query: 'string'
          };
          let response = {};

          let postStub;

          before('stub httpClient._client.post()', () => {
            postStub = sandbox.stub(httpClient._client, 'post')
              .returns(Promise.resolve(response));
          });

          it('should resolve and call httpClient._client.post()', () => {
            return httpClient.post(path, body, params)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(path);
                postStub.args[0][1].should.deepEqual(body);
                postStub.args[0][2].should.deepEqual({
                  params
                });
              });
          });
        });

        describe('when options are passed', () => {
          let path = '/foobar';
          let body = {
            key: 'value'
          };
          let params = {
            query: 'string'
          };
          let options = {
            auth: {
              username: 'FOOBAR'
            }
          };
          let response = {};

          let postStub;

          before('stub httpClient._client.post()', () => {
            postStub = sandbox.stub(httpClient._client, 'post')
              .returns(Promise.resolve(response));
          });

          it('should resolve and call httpClient._client.post()', () => {
            return httpClient.post(path, body, params, options)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(path);
                postStub.args[0][1].should.deepEqual(body);
                postStub.args[0][2].should.deepEqual({
                  auth: options.auth,
                  params
                });
              });
          });
        });
      });
    });
  });
});
