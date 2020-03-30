const Promise = require('bluebird');
const v3HttpClient = require('./v3HttpClient');

function getDecisionsApi(siftScienceClient) {
  const key = siftScienceClient._key;
  const logger = siftScienceClient._logger;

  return {
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/decisions-api/apply-decisions
     */
    applyByAccountIdAndUserId(accountId, userId, data = {}, params = {}) {
      if (!accountId) return Promise.reject(new Error('accountId is required'));
      if (!userId) return Promise.reject(new Error('userId is required'));

      return Promise.resolve(v3HttpClient.post(`/accounts/${accountId}/users/${userId}/decisions`, data, params, {
          auth: {
            username: key
          }
        }))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    },
    /**
     * @param {String} accountId
     * @param {String} orderId
     * @param {String} userId
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/decisions-api/apply-decisions
     */
    applyByAccountIdAndOrderId(accountId, userId, orderId, data = {}, params = {}) {
      if (!accountId) return Promise.reject(new Error('accountId is required'));
      if (!orderId) return Promise.reject(new Error('orderId is required'));
      if (!userId) return Promise.reject(new Error('userId is required'));

      return Promise.resolve(v3HttpClient.post(`/accounts/${accountId}/users/${userId}/orders/${orderId}/decisions`, data, params, {
          auth: {
            username: key
          }
        }))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    },
    /**
     * @param {String} accountId
     * @param {String} sessionId
     * @param {String} userId
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/decisions-api/apply-decisions
     */
    applyByAccountIdAndSessionId(accountId, userId, sessionId, data = {}, params = {}) {
      if (!accountId) return Promise.reject(new Error('accountId is required'));
      if (!sessionId) return Promise.reject(new Error('sessionId is required'));
      if (!userId) return Promise.reject(new Error('userId is required'));

      return Promise.resolve(v3HttpClient.post(`/accounts/${accountId}/users/${userId}/sessions/${sessionId}/decisions`, data, params, {
          auth: {
            username: key
          }
        }))
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
    getByAccountIdAndUserId(accountId, userId, params = {}) {
      if (!accountId) return Promise.reject(new Error('accountId is required'));
      if (!userId) return Promise.reject(new Error('userId is required'));

      return Promise.resolve(v3HttpClient.get(`/accounts/${accountId}/users/${userId}/decisions`, params, {
          auth: {
            username: key
          }
        }))
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

      return Promise.resolve(v3HttpClient.get(`/accounts/${accountId}/orders/${orderId}/decisions`, params, {
          auth: {
            username: key
          }
        }))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/decisions-api/decisions-list
     */
    listByAccountId(accountId, params = {}) {
      if (!accountId) return Promise.reject(new Error('accountId is required'));

      return Promise.resolve(v3HttpClient.get(`/accounts/${accountId}/decisions`, params, {
          auth: {
            username: key
          }
        }))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    },
  };
}

module.exports = getDecisionsApi;
