const should = require('should');
const sinon = require('sinon');

let SiftScienceClient;
let v3HttpClient;
let sandbox;

before(() => {
  SiftScienceClient = require('../../../../lib');
  v3HttpClient = require('../../../../lib/client/v3HttpClient');

  sandbox = sinon.sandbox.create();
});

describe('lib', () => {
  describe('client', () => {
    describe('decisions', () => {
      describe('getByAccountIdAndUserId', () => {
        afterEach(() => {
          sandbox.restore();
        });

        const key = '123';
        let siftScienceClient;

        before('create siftScienceClient', () => {
          siftScienceClient = new SiftScienceClient(key);
        });

        describe('when called without accountId', () => {
          let accountId = null;

          it('should reject with an error', () => {
            return siftScienceClient.decisions.getByAccountIdAndUserId(accountId)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('accountId is required');
              });
          });
        });

        describe('when called without userId', () => {
          let accountId = '123';
          let userId = null;

          it('should reject with an error', () => {
            return siftScienceClient.decisions.getByAccountIdAndUserId(accountId, userId)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('userId is required');
              });
          });
        });

        describe('when called with an accountId and userId', () => {
          let accountId = '123';
          let userId = '123';
          let response = {
            data: {}
          };

          let getStub;

          before('stub v3HttpClient.get()', () => {
            getStub = sandbox.stub(v3HttpClient, 'get')
              .returns(Promise.resolve(response));
          });

          it('should call v3HttpClient.get()', () => {
            return siftScienceClient.decisions.getByAccountIdAndUserId(accountId, userId)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                getStub.callCount.should.equal(1);
                getStub.args[0][0].should.equal(`/accounts/${accountId}/users/${userId}/decisions`);
                getStub.args[0][1].should.deepEqual({});
                getStub.args[0][2].should.deepEqual({
                  auth: {
                    username: siftScienceClient._key
                  }
                });
              });
          });
        });

        describe('when called with params', () => {
          let accountId = '123';
          let userId = '123';
          let params = {
            foo: 'bar'
          };
          let response = {
            data: {}
          };

          let getStub;

          before('stub v3HttpClient.get()', () => {
            getStub = sandbox.stub(v3HttpClient, 'get')
              .returns(Promise.resolve(response));
          });

          it('should call v3HttpClient.get()', () => {
            return siftScienceClient.decisions.getByAccountIdAndUserId(accountId, userId, params)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                getStub.callCount.should.equal(1);
                getStub.args[0][0].should.equal(`/accounts/${accountId}/users/${userId}/decisions`);
                getStub.args[0][1].should.deepEqual(params);
                getStub.args[0][2].should.deepEqual({
                  auth: {
                    username: siftScienceClient._key
                  }
                });
              });
          });
        });
      });
    });
  });
});
