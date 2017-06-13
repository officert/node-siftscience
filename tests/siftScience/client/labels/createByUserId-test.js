const Promise = require('bluebird');
const should = require('should');
const sinon = require('sinon');

let siftScience;
let v204;
let sandbox;

before(() => {
  siftScience = require('../../../../lib');
  v204 = require('../../../../lib/client/v204');

  sandbox = sinon.sandbox.create();
});

describe('siftScience', () => {
  describe('client', () => {
    describe('labels', () => {
      describe('createByUserId', () => {
        afterEach(() => {
          sandbox.restore();
        });

        const key = '123';
        let siftScienceClient;

        before('create siftScienceClient', () => {
          siftScienceClient = siftScience.init(key);
        });

        describe('when called without userId', () => {
          let userId = null;

          it('should reject with an error', () => {
            return siftScienceClient.labels.createByUserId(userId)
              .then(should.not.exist)
              .catch(err => {
                should.exist(err);
                err.should.be.instanceOf(Error);
                err.message.should.equal('userId is required');
              });
          });
        });

        describe('when called with a userId', () => {
          let userId = '123';
          let params = {
            foo: 'bar'
          };
          let response = {
            body: {}
          };

          let postStub;

          before('stub v204.post()', () => {
            postStub = sandbox.stub(v204, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v204.post()', () => {
            return siftScienceClient.labels.createByUserId(userId, params)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.body);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal(`/users/${userId}/labels`);
                postStub.args[0][1].should.deepEqual(params);
              });
          });
        });
      });
    });
  });
});
