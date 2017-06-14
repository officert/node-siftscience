const Promise = require('bluebird');
const v3HttpClient = require('./v3HttpClient');
const _ = require('lodash');

function getDecisionsApi(siftScienceClient) {
  const key = siftScienceClient._key;
  const logger = siftScienceClient._logger;

  return {
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/decisions-api/decision-status
     */
    getByAccountIdAndUserId(accountId, userId, params = {}) {
      if (!accountId) return Promise.reject(new Error('accountId is required'));
      if (!userId) return Promise.reject(new Error('userId is required'));

      _.extend(params, {
        $api_key: key
      });

      return Promise.resolve(v3HttpClient.get(`/accounts/${accountId}/users/${userId}/decisions`, params))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/decisions-api/decision-status
     */
    getByAccountIdAndOrderId(accountId, orderId, params = {}) {
      if (!accountId) return Promise.reject(new Error('accountId is required'));
      if (!orderId) return Promise.reject(new Error('orderId is required'));

      _.extend(params, {
        $api_key: key
      });

      return Promise.resolve(v3HttpClient.get(`/accounts/${accountId}/orders/${orderId}/decisions`, params))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    }
  };
}

module.exports = getDecisionsApi;
