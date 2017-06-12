const should = require('should');
const Promise = require('bluebird');
const sinon = require('sinon');
const _ = require('lodash');

let siftScience;
let v204;
let sandbox;

before(() => {
  siftScience = require('lib');
  v204 = require('lib/client/v204');

  sandbox = sinon.sandbox.create();
});

describe('siftScience', () => {
  describe('client', () => {
    describe('events', () => {
      describe('addItemToCart', () => {
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

          before('stub v204.post()', () => {
            postStub = sandbox.stub(v204, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v204.post()', () => {
            return siftScienceClient.events.addItemToCart()
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual({
                  $type: '$add_item_to_cart',
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

          before('stub v204.post()', () => {
            postStub = sandbox.stub(v204, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v204.post()', () => {
            return siftScienceClient.events.addItemToCart(data)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual(_.extend(data, {
                  $type: '$add_item_to_cart',
                  $api_key: key
                }));
              });
          });
        });
      });
    });
  });
});
