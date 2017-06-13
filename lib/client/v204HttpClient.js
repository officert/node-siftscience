const HttpClient = require('./httpClient');

const V204_BASE_URL = 'https://api.siftscience.com/v204';

module.exports = new HttpClient(V204_BASE_URL);
