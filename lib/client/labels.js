const Promise = require('bluebird');
const v204 = require('./v204');
const _ = require('lodash');

function getLabelsApi(key) {
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

      return Promise.resolve(v204.post(`/users/${userId}/labels`, data, {
          params
        }))
        .then(response => response.data);
    },
    /**
     * @param {String} userId
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/labels-api/unlabel-user
     */
    deleteByUserId(userId, params = {}) {
      if (!userId) return Promise.reject(new Error('userId is required'));

      _.extend(params, {
        $api_key: key
      });

      return Promise.resolve(v204.delete(`/users/${userId}/labels`, {
          params
        }))
        .then(response => response.data);
    }
  };
}

module.exports = getLabelsApi;
