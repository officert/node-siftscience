const Promise = require('bluebird');
const v204 = require('./v204');
const _ = require('lodash');

function getLabelsApi(key) {
  return {
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/labels-api/label-user
     */
    createByUserId(userId, data = {}) {
      if (!userId) return Promise.reject(new Error('userId is required'));

      _.extend(data, {
        $api_key: key
      });

      return v204.post(`/users/${userId}/labels`, data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/labels-api/unlabel-user
     */
    deleteByUserId(userId, data = {}) {
      if (!userId) return Promise.reject(new Error('userId is required'));

      _.extend(data, {
        $api_key: key
      });

      return v204.delete(`/users/${userId}/labels`, data);
    }
  };
}

module.exports = getLabelsApi;
