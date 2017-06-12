const axios = require('axios');
const Promise = require('bluebird');

const SIFT_SCIENCE_API_V204_BASE_URL = 'https://api.siftscience.com/v204';

class HttpClient {
  constructor() {
    this._client = axios.create({
      baseUrl: SIFT_SCIENCE_API_V204_BASE_URL
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

    return this._client.post(path, body, params ? {
      params
    } : null);
  }

  delete(path, params) {
    if (!path) return Promise.reject(new Error('path is required'));

    return this._client.delete(path, params ? {
      params
    } : null);
  }
}

module.exports = new HttpClient();
