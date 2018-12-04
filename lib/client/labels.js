const Promise = require('bluebird');
const v205HttpClient = require('./v205HttpClient');
const _ = require('lodash');

function getLabelsApi(siftScienceClient) {
  const key = siftScienceClient._key;
  const logger = siftScienceClient._logger;

  return {
    /**
     * @param {String} userId
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/labels-api/label-user
     */
    createByUserId(userId, data = {}, params = {}) {
      if (!userId) return Promise.reject(new Error('userId is required'));

      _.extend(data, {
        $api_key: key
      });

      return Promise.resolve(v205HttpClient.post(`/users/${userId}/labels`, data, params))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    },
    /**
     * @param {String} userId
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/labels-api/unlabel-user
     */
    deleteByUserId(userId, params = {}) {
      if (!userId) return Promise.reject(new Error('userId is required'));

      _.extend(params, {
        api_key: key
      });

      return Promise.resolve(v205HttpClient.delete(`/users/${userId}/labels`, params))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    }
  };
}

module.exports = getLabelsApi;
