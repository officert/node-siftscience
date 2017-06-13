const should = require('should');
const Promise = require('bluebird');
const sinon = require('sinon');
const _ = require('lodash');

let siftScience;
let v204HttpClient;
let sandbox;

before(() => {
  siftScience = require('../../../../lib');
  v204HttpClient = require('../../../../lib/client/v204HttpClient');

  sandbox = sinon.sandbox.create();
});

describe('lib', () => {
  describe('client', () => {
    describe('events', () => {
      describe('transaction', () => {
        afterEach(() => {
          sandbox.restore();
        });

        const key = '123';
        let siftScienceClient;

        before('create siftScienceClient', () => {
          siftScienceClient = siftScience.init(key);
        });

        describe('when called with nothing', () => {
          let postStub;

          let response = {
            data: {}
          };

          before('stub v204HttpClient.post()', () => {
            postStub = sandbox.stub(v204HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v204HttpClient.post()', () => {
            return siftScienceClient.events.transaction()
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual({
                  $type: '$transaction',
                  $api_key: key
                });
              });
          });
        });

        describe('when called with data', () => {
          let data = {
            foo: 'bar'
          };
          let postStub;

          let response = {
            data: {}
          };

          before('stub v204HttpClient.post()', () => {
            postStub = sandbox.stub(v204HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v204HttpClient.post()', () => {
            return siftScienceClient.events.transaction(data)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual(_.extend(data, {
                  $type: '$transaction',
                  $api_key: key
                }));
              });
          });
        });
      });
    });
  });
});
