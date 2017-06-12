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
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/flag-content
     */
    flagContent(data = {}) {
      const event = '$flag_content';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-promotion
     */
    addPromotion(data = {}) {
      const event = '$add_promotion';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-item-to-cart
     */
    addItemToCart(data = {}) {
      const event = '$add_item_to_cart';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/remove-item-from-cart
     */
    removeItemFromCart(data = {}) {
      const event = '$remove_item_from_cart';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/submit-review
     */
    submitReview(data = {}) {
      const event = '$submit_review';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/send-message
     */
    sendMessage(data = {}) {
      const event = '$send_message';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/login
     */
    login(data = {}) {
      const event = '$login';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/logout
     */
    logout(data = {}) {
      const event = '$logout';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/link-session-to-user
     */
    linkSessionToUser(data = {}) {
      const event = '$link_session_to_user';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/chargeback
     */
    chargeback(data = {}) {
      const event = '$chargeback';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/order-status
     */
    orderStatus(data = {}) {
      const event = '$order_status';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    },
    /**
     * @param {Object} [data]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/verification
     */
    verification(data = {}) {
      const event = '$verification';

      _.extend(data, {
        $type: event,
        $api_key: key
      });

      return v204.post('/events', data);
    }
  };
}

module.exports = getEventsApi;
