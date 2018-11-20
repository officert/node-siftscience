const HttpClient = require('./httpClient');

const V205_BASE_URL = 'https://api.siftscience.com/v205';

module.exports = new HttpClient(V205_BASE_URL);
