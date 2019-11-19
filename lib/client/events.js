const Promise = require('bluebird');
const v205HttpClient = require('./v205HttpClient');
const _ = require('lodash');

function getEventsApi(siftScienceClient) {
  const key = siftScienceClient._key;
  const logger = siftScienceClient._logger;

  return {
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/custom-events
     */
    create(data = {}, params = {}) {
      _.extend(data, {
        $api_key: key
      });

      return Promise.resolve(v205HttpClient.post('/events', data, params))
        .then(response => response.data)
        .catch(error => {
          logger.logRequestError(error);
          throw error;
        });
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-order
     */
    createOrder(data = {}, params = {}) {
      const event = '$create_order';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-order
     */
    updateOrder(data = {}, params = {}) {
      const event = '$update_order';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/transaction
     */
    transaction(data = {}, params = {}) {
      const event = '$transaction';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-account
     */
    createAccount(data = {}, params = {}) {
      const event = '$create_account';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-account
     */
    updateAccount(data = {}, params = {}) {
      const event = '$update_account';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-content
     */
    createContent(data = {}, params = {}) {
      const event = '$create_content';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-content
     */
    updateContent(data = {}, params = {}) {
      const event = '$update_content';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://sift.com/developers/docs/curl/events-api/reserved-events/update-password
     */
    updatePassword(data = {}, params = {}) {
      const event = '$update_password';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/content-status
     */
    contentStatus(data = {}, params = {}) {
      const event = '$content_status';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/flag-content
     */
    flagContent(data = {}, params = {}) {
      const event = '$flag_content';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-promotion
     */
    addPromotion(data = {}, params = {}) {
      const event = '$add_promotion';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-item-to-cart
     */
    addItemToCart(data = {}, params = {}) {
      const event = '$add_item_to_cart';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/remove-item-from-cart
     */
    removeItemFromCart(data = {}, params = {}) {
      const event = '$remove_item_from_cart';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/submit-review
     */
    submitReview(data = {}, params = {}) {
      const event = '$submit_review';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/send-message
     */
    sendMessage(data = {}, params = {}) {
      const event = '$send_message';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/login
     */
    login(data = {}, params = {}) {
      const event = '$login';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/logout
     */
    logout(data = {}, params = {}) {
      const event = '$logout';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/link-session-to-user
     */
    linkSessionToUser(data = {}, params = {}) {
      const event = '$link_session_to_user';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/chargeback
     */
    chargeback(data = {}, params = {}) {
      const event = '$chargeback';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/order-status
     */
    orderStatus(data = {}, params = {}) {
      const event = '$order_status';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [params]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/verification
     */
    verification(data = {}, params = {}) {
      const event = '$verification';

      _.extend(data, {
        $type: event
      });

      return this.create(data, params);
    }
  };
}

module.exports = getEventsApi;
