const axios = require('axios');
const Promise = require('bluebird');

class HttpClient {
  constructor(baseURL) {
    if (!baseURL) throw new Error('baseURL is required');

    this._client = axios.create({
      baseURL: baseURL
    });
  }

  /**
   * @param {String} path
   * @param {Object} [params]
   * @param {Object} [options]
   */
  get(path, params, options = {}) {
    if (!path) return Promise.reject(new Error('path is required'));

    options.params = params;

    return this._client.get(path, options);
  }

  /**
   * @param {String} path
   * @param {Object} [params]
   * @param {Object} [options]
   */
  post(path, body = {}, params, options = {}) {
    if (!path) return Promise.reject(new Error('path is required'));

    options.params = params;

    return this._client.post(path, body, options);
  }

  /**
   * @param {String} path
   * @param {Object} [params]
   * @param {Object} [options]
   */
  delete(path, params, options = {}) {
    if (!path) return Promise.reject(new Error('path is required'));

    options.params = params;

    return this._client.delete(path, options);
  }
}

module.exports = HttpClient;
