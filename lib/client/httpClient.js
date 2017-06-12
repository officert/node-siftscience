const axios = require('axios');
const Promise = require('bluebird');

const SIFT_SCIENCE_API_V204_BASE_URL = 'https://api.siftscience.com/v204';

class HttpClient {
  constructor() {
    this._v204Client = axios.create({
      baseUrl: SIFT_SCIENCE_API_V204_BASE_URL
    });
  }

  get v204Client() {
    return this._v204Client;
  }

  get(path, params) {
    if (!path) return Promise.reject(new Error('path is required'));

    return this._v204Client.get(path, {
      params
    });
  }

  post(path, body, params) {
    if (!path) return Promise.reject(new Error('path is required'));

    return this._v204Client.post(path, body, params ? {
      params
    } : null);
  }
}

module.exports = new HttpClient();
