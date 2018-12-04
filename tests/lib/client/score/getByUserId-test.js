const should = require('should');
const sinon = require('sinon');

let SiftScienceClient;
let v205HttpClient;
let sandbox;

before(() => {
  SiftScienceClient = require('../../../../lib');
  v205HttpClient = require('../../../../lib/client/v205HttpClient');

  sandbox = sinon.sandbox.create();
});

describe('lib', () => {
  describe('client', () => {
    describe('score', () => {
      describe('getByUserId', () => {
        afterEach(() => {
          sandbox.restore();
        });

        const key = '123';
        let siftScienceClient;

        before('create siftScienceClient', () => {
          siftScienceClient = new SiftScienceClient(key);
        });

        describe('when called without userId', () => {
          let userId = null;

          it('should reject with an error', () => {
            return siftScienceClient.score.getByUserId(userId)
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
          let response = {
            data: {}
          };

          let getStub;

          before('stub v205HttpClient.get()', () => {
            getStub = sandbox.stub(v205HttpClient, 'get')
              .returns(Promise.resolve(response));
          });

          it('should call v205HttpClient.get()', () => {
            return siftScienceClient.score.getByUserId(userId)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                getStub.callCount.should.equal(1);
                getStub.args[0][0].should.equal(`/score/${userId}`);
              });
          });
        });

        describe('when called with params', () => {
          let userId = '123';
          let params = {
            foo: 'bar'
          };
          let response = {
            data: {}
          };

          let getStub;

          before('stub v205HttpClient.get()', () => {
            getStub = sandbox.stub(v205HttpClient, 'get')
              .returns(Promise.resolve(response));
          });

          it('should call v205HttpClient.get()', () => {
            return siftScienceClient.score.getByUserId(userId, params)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                getStub.callCount.should.equal(1);
                getStub.args[0][0].should.equal(`/score/${userId}`);
                getStub.args[0][1].should.deepEqual(params);
              });
          });
        });
      });
    });
  });
});
