const getEventsApi = require('./events');
const getLabelsApi = require('./labels');
const getScoreApi = require('./score');

class SiftScienceClient {
  constructor(key) {
    if (!key) throw new Error('key is required');

    this._key = key;

    this.events = getEventsApi(this._key);
    this.labels = getLabelsApi(this._key);
    this.score = getScoreApi(this._key);
  }
}

module.exports = SiftScienceClient;
