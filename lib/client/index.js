const getEventsApi = require('./events');
const getLabelsApi = require('./labels');
const getScoreApi = require('./score');

class SiftScienceClient {
  constructor(key) {
    if (!key) throw new Error('key is required');

    this._key = key;
  }

  get events() {
    return getEventsApi(this._key);
  }

  get labels() {
    return getLabelsApi(this._key);
  }

  get score() {
    return getScoreApi(this._key);
  }
}

module.exports = SiftScienceClient;
