const axios = require('axios');
const Promise = require('bluebird');

class HttpClient {
  constructor(baseURL) {
    if (!baseURL) throw new Error('baseURL is required');

    this._client = axios.create({
      baseURL: baseURL
    });
  }

  get(path, params) {
    if (!path) return Promise.reject(new Error('path is required'));

    return this._client.get(path, {
      params
    });
  }

  post(path, body = {}, params) {
    if (!path) return Promise.reject(new Error('path is required'));

    return this._client.post(path, body, (params ? {
      params
    } : null));
  }

  delete(path, params) {
    if (!path) return Promise.reject(new Error('path is required'));

    return this._client.delete(path, (params ? {
      params
    } : null));
  }
}

module.exports = HttpClient;
