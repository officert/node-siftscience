const getEventsApi = require('./events');

class SiftScienceClient {
  constructor(key) {
    if (!key) throw new Error('key is required');

    this._key = key;
  }

  get events() {
    return getEventsApi(this._key);
  }
}

module.exports = SiftScienceClient;
