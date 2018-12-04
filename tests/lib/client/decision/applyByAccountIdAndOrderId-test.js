const _ = require('lodash');
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
      describe('applyByAccountIdAndOrderId', () => {
        afterEach(() => {
          sandbox.restore();
        });

        const key = '123';
        let siftScienceClient;

        before('create siftScienceClient', () => {
          siftScienceClient = new SiftScienceClient(key);
        });

        describe('when called without accountId', () => {
          const accountId = null;
          const userId = '123';
          const orderId = '123';

          it('should reject with an error', () => {
            return siftScienceClient.decisions.applyByAccountIdAndOrderId(accountId, userId, orderId)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('accountId is required');
              });
          });
        });

        describe('when called without userId', () => {
          const accountId = '123';
          const orderId = '123';
          const userId = null;

          it('should reject with an error', () => {
            return siftScienceClient.decisions.applyByAccountIdAndOrderId(accountId, userId, orderId)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('userId is required');
              });
          });
        });

        describe('when called without orderId', () => {
          const accountId = '123';
          const orderId = null;
          const userId = '123';

          it('should reject with an error', () => {
            return siftScienceClient.decisions.applyByAccountIdAndOrderId(accountId, userId, orderId)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('orderId is required');
              });
          });
        });

        describe('when called with an accountId, userId and orderId', () => {
          const accountId = '123';
          const userId = '123';
          const orderId = '123';
          const data = {};
          const response = {
            data: {}
          };

          let postStub;

          before('stub v3HttpClient.post()', () => {
            postStub = sandbox.stub(v3HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v3HttpClient.post()', () => {
            return siftScienceClient.decisions.applyByAccountIdAndOrderId(accountId, userId, orderId, data)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(`/accounts/${accountId}/users/${userId}/orders/${orderId}/decisions`);
                postStub.args[0][1].should.deepEqual(data);
                postStub.args[0][2].should.deepEqual({});
                postStub.args[0][3].should.deepEqual({
                  auth: {
                    username: siftScienceClient._key
                  }
                });
              });
          });
        });

        describe('when called with params', () => {
          const accountId = '123';
          const userId = '123';
          const orderId = '123';
          const data = {};
          const params = {
            foo: 'bar'
          };
          const response = {
            data: {}
          };

          let postStub;

          before('stub v3HttpClient.post()', () => {
            postStub = sandbox.stub(v3HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v3HttpClient.post()', () => {
            return siftScienceClient.decisions.applyByAccountIdAndOrderId(accountId, userId, orderId, data, params)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(`/accounts/${accountId}/users/${userId}/orders/${orderId}/decisions`);
                postStub.args[0][1].should.deepEqual(_.extend(data, {
                  $api_key: key
                }));
                postStub.args[0][2].should.deepEqual(params);
                postStub.args[0][3].should.deepEqual({
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
