const getEventsApi = require('./events');
const getLabelsApi = require('./labels');

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
}

module.exports = SiftScienceClient;
