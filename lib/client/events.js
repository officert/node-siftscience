const v204 = require('./v204');
const _ = require('lodash');

function getEventsApi(key) {
  return {
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-order
     */
    createOrder(data = {}) {
      const event = '$create_order';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-order
     */
    updateOrder(data = {}) {
      const event = '$update_order';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/transaction
     */
    transaction(data = {}) {
      const event = '$transaction';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-account
     */
    createAccount(data = {}) {
      const event = '$create_account';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-account
     */
    updateAccount(data = {}) {
      const event = '$update_account';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-content
     */
    createContent(data = {}) {
      const event = '$create_content';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-content
     */
    updateContent(data = {}) {
      const event = '$update_content';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/content-status
     */
    contentStatus(data = {}) {
      const event = '$content_status';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    }
  };
}

module.exports = getEventsApi;
