const should = require('should');
const Promise = require('bluebird');
const sinon = require('sinon');

let v204;
let sandbox;

before(() => {
  v204 = require('lib/client/v204');

  sandbox = sinon.sandbox.create();
});

describe('siftScience', () => {
  describe('client', () => {
    describe('v204', () => {
      describe('httpClient', () => {
        describe('delete', () => {
          afterEach(() => {
            sandbox.restore();
          });

          describe('when no path is passed', () => {
            let path = null;
            let expectedResponse = {};

            let deleteStub;

            before('stub v204.delete()', () => {
              deleteStub = sandbox.stub(v204._client, 'delete')
                .returns(Promise.resolve(expectedResponse));
            });

            it('should reject with an error', () => {
              return v204.delete(path)
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

            before('stub v204.delete()', () => {
              deleteStub = sandbox.stub(v204._client, 'delete')
                .returns(Promise.resolve(expectedResponse));
            });

            it('should resolve and call v204Client._client.delete()', () => {
              return v204.delete(path)
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

            before('stub v204.delete()', () => {
              deleteStub = sandbox.stub(v204._client, 'delete')
                .returns(Promise.resolve(expectedResponse));
            });

            it('should resolve and call v204Client._client.delete()', () => {
              return v204.delete(path, params)
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
});
