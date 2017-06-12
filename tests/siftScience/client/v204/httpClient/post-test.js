const should = require('should');
const Promise = require('bluebird');
const sinon = require('sinon');

let v204;
let sandbox;

before(() => {
  v204 = require('../../../../../lib/client/v204');

  sandbox = sinon.sandbox.create();
});

describe('siftScience', () => {
  describe('client', () => {
    describe('v204', () => {
      describe('httpClient', () => {
        describe('post', () => {
          afterEach(() => {
            sandbox.restore();
          });

          describe('when no path is passed', () => {
            let path = null;
            let expectedResponse = {};

            let postStub;

            before('stub v204.post()', () => {
              postStub = sandbox.stub(v204._client, 'post')
                .returns(Promise.resolve(expectedResponse));
            });

            it('should reject with an error', () => {
              return v204.post(path)
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
            let expectedResponse = {};

            let postStub;

            before('stub v204.post()', () => {
              postStub = sandbox.stub(v204._client, 'post')
                .returns(Promise.resolve(expectedResponse));
            });

            it('should resolve and call v204Client._client.post()', () => {
              return v204.post(path)
                .then(response => {
                  should.exist(response);
                  response.should.deepEqual(expectedResponse);

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
            let expectedResponse = {};

            let postStub;

            before('stub v204.post()', () => {
              postStub = sandbox.stub(v204._client, 'post')
                .returns(Promise.resolve(expectedResponse));
            });

            it('should resolve and call v204Client._client.post()', () => {
              return v204.post(path, body)
                .then(response => {
                  should.exist(response);
                  response.should.deepEqual(expectedResponse);

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
            let expectedResponse = {};

            let postStub;

            before('stub v204.post()', () => {
              postStub = sandbox.stub(v204._client, 'post')
                .returns(Promise.resolve(expectedResponse));
            });

            it('should resolve and call v204Client._client.post()', () => {
              return v204.post(path, body, params)
                .then(response => {
                  should.exist(response);
                  response.should.deepEqual(expectedResponse);

                  postStub.callCount.should.equal(1);
                  postStub.args[0][0].should.equal(path);
                  postStub.args[0][1].should.deepEqual(body);
                  postStub.args[0][2].should.deepEqual({
                    params
                  });
                });
            });
          });
        });
      });
    });
  });
});
