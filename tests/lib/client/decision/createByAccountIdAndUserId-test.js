const _ = require('lodash');
const should = require('should');
const sinon = require('sinon');

let siftScience;
let v3HttpClient;
let sandbox;

before(() => {
  siftScience = require('../../../../lib');
  v3HttpClient = require('../../../../lib/client/v3HttpClient');

  sandbox = sinon.sandbox.create();
});

describe('lib', () => {
  describe('client', () => {
    describe('decisions', () => {
      describe('createByAccountIdAndUserId', () => {
        afterEach(() => {
          sandbox.restore();
        });

        const key = '123';
        let siftScienceClient;

        before('create siftScienceClient', () => {
          siftScienceClient = siftScience.init(key);
        });

        describe('when called without accountId', () => {
          let accountId = null;

          it('should reject with an error', () => {
            return siftScienceClient.decisions.createByAccountIdAndUserId(accountId)
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
            return siftScienceClient.decisions.createByAccountIdAndUserId(accountId, userId)
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
          let data = {};
          let response = {
            data: {}
          };

          let postStub;

          before('stub v3HttpClient.post()', () => {
            postStub = sandbox.stub(v3HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v3HttpClient.post()', () => {
            return siftScienceClient.decisions.createByAccountIdAndUserId(accountId, userId, data)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(`/accounts/${accountId}/users/${userId}/decisions`);
                postStub.args[0][1].should.deepEqual(data);
              });
          });
        });

        describe('when called with params', () => {
          let accountId = '123';
          let userId = '123';
          let data = {};
          let params = {
            foo: 'bar'
          };
          let response = {
            data: {}
          };

          let postStub;

          before('stub v3HttpClient.post()', () => {
            postStub = sandbox.stub(v3HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v3HttpClient.post()', () => {
            return siftScienceClient.decisions.createByAccountIdAndUserId(accountId, userId, data, params)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(`/accounts/${accountId}/users/${userId}/decisions`);
                postStub.args[0][1].should.deepEqual(_.extend(data, {
                  $api_key: key
                }));
                postStub.args[0][2].should.deepEqual(params);
              });
          });
        });
      });
    });
  });
});
