const Promise = require('bluebird');
const v204 = require('./v204');
const _ = require('lodash');

function getScoreApi(key) {
  return {
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/score-api/score-api
     */
    getByUserId(userId, params = {}) {
      if (!userId) return Promise.reject(new Error('userId is required'));

      _.extend(params, {
        $api_key: key
      });

      return Promise.resolve(v204.get(`/users/${userId}/score`, {
          params
        }))
        .then(response => response.data);
    }
  };
}

module.exports = getScoreApi;
