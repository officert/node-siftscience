const HttpClient = require('./httpClient');

const V3_BASE_URL = 'https://api.siftscience.com/v3';

module.exports = new HttpClient(V3_BASE_URL);
