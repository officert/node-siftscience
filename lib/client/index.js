const _ = require('lodash');
const v204 = require('./v204');

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

      return v204.post('/events', data);
    }
  };
}

module.exports = SiftScienceClient;
