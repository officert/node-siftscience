const should = require('should');
const Promise = require('bluebird');
const sinon = require('sinon');
const _ = require('lodash');

let siftScience;
let httpClient;
let sandbox;

before(() => {
  siftScience = require('lib');
  httpClient = require('lib/client/httpClient');

  sandbox = sinon.sandbox.create();
});

describe('siftScience', () => {
  describe('client', () => {
    describe('events', () => {
      describe('createOrder', () => {
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

          let response = {};

          before('stub httpClient.post()', () => {
            postStub = sandbox.stub(httpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call httpClient.post()', () => {
            return siftScienceClient.events.createOrder()
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual({
                  $type: '$create_order',
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

          let response = {};

          before('stub httpClient.post()', () => {
            postStub = sandbox.stub(httpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call httpClient.post()', () => {
            return siftScienceClient.events.createOrder(data)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual(_.extend(data, {
                  $type: '$create_order',
                  $api_key: key
                }));
              });
          });
        });
      });
    });
  });
});
