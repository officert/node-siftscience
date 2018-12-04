const should = require('should');
const Promise = require('bluebird');
const sinon = require('sinon');
const _ = require('lodash');

let siftScience;
let v205HttpClient;
let sandbox;

before(() => {
  siftScience = require('../../../../lib');
  v205HttpClient = require('../../../../lib/client/v205HttpClient');

  sandbox = sinon.sandbox.create();
});

describe('lib', () => {
  describe('client', () => {
    describe('events', () => {
      describe('contentStatus', () => {
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

          before('stub v205HttpClient.post()', () => {
            postStub = sandbox.stub(v205HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v205HttpClient.post()', () => {
            return siftScienceClient.events.contentStatus()
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual({
                  $type: '$content_status',
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

          before('stub v205HttpClient.post()', () => {
            postStub = sandbox.stub(v205HttpClient, 'post')
              .returns(Promise.resolve(response));
          });

          it('should call v205HttpClient.post()', () => {
            return siftScienceClient.events.contentStatus(data)
              .then(result => {
                should.exist(result);
                result.should.deepEqual(response.data);

                postStub.callCount.should.equal(1);
                postStub.args[0][0].should.equal('/events');
                postStub.args[0][1].should.deepEqual(_.extend(data, {
                  $type: '$content_status',
                  $api_key: key
                }));
              });
          });
        });
      });
    });
  });
});
