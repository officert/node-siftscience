const axios = require('axios');

const SIFT_SCIENCE_API_V204_BASE_URL = 'https://api.siftscience.com/v204';

const siftScienceV204HttpClient = axios.create({
  baseUrl: SIFT_SCIENCE_API_V204_BASE_URL
});

module.exports = {
  get(path, params) {
    return siftScienceV204HttpClient.get(path, {
      params
    });
  },
  post(path, body, params) {
    return siftScienceV204HttpClient.post(path, body, params ? {
      params
    } : null);
  }
};
