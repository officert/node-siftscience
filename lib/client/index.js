const _ = require('lodash');
const httpClient = require('./httpClient');

class SiftScienceClient {
  constructor(key) {
    if (!key) throw new Error('key is required');

    this._key = key;
  }

  get events() {
    return getEventsApi(this._key);
  }
}

function getEventsApi(key) {
  return {
    createOrder(data = {}) {
      const event = '$create_order';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return httpClient.post('/events', data);
    }
  };
}

module.exports = SiftScienceClient;
