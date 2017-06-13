const Promise = require('bluebird');
const v204 = require('./v204');
const _ = require('lodash');

function getEventsApi(key) {
  return {
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/custom-events
     */
    create(data = {}, options = {}) {
      _.extend(data, {
        $api_key: key
      });

      const params = {};

      if (options.returnScore) params.return_score = true;
      if (options.abuseTypes && Array.isArray(options.abuseTypes)) params.abuse_types = options.abuseTypes.join(',');

      return Promise.resolve(v204.post('/events', data, (params ? {
          params
        } : null)))
        .then(response => response.body);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-order
     */
    createOrder(data = {}, options = {}) {
      const event = '$create_order';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-order
     */
    updateOrder(data = {}, options = {}) {
      const event = '$update_order';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/transaction
     */
    transaction(data = {}, options = {}) {
      const event = '$transaction';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-account
     */
    createAccount(data = {}, options = {}) {
      const event = '$create_account';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-account
     */
    updateAccount(data = {}, options = {}) {
      const event = '$update_account';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-content
     */
    createContent(data = {}, options = {}) {
      const event = '$create_content';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-content
     */
    updateContent(data = {}, options = {}) {
      const event = '$update_content';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/content-status
     */
    contentStatus(data = {}, options = {}) {
      const event = '$content_status';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/flag-content
     */
    flagContent(data = {}, options = {}) {
      const event = '$flag_content';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-promotion
     */
    addPromotion(data = {}, options = {}) {
      const event = '$add_promotion';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-item-to-cart
     */
    addItemToCart(data = {}, options = {}) {
      const event = '$add_item_to_cart';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/remove-item-from-cart
     */
    removeItemFromCart(data = {}, options = {}) {
      const event = '$remove_item_from_cart';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/submit-review
     */
    submitReview(data = {}, options = {}) {
      const event = '$submit_review';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/send-message
     */
    sendMessage(data = {}, options = {}) {
      const event = '$send_message';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/login
     */
    login(data = {}, options = {}) {
      const event = '$login';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/logout
     */
    logout(data = {}, options = {}) {
      const event = '$logout';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/link-session-to-user
     */
    linkSessionToUser(data = {}, options = {}) {
      const event = '$link_session_to_user';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/chargeback
     */
    chargeback(data = {}, options = {}) {
      const event = '$chargeback';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/order-status
     */
    orderStatus(data = {}, options = {}) {
      const event = '$order_status';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    },
    /**
     * @param {Object} [data]
     * @param {Object} [options]
     * @param {Boolean} [options.returnScore]
     * @param {Array<String>} [options.abuseTypes]
     * https://siftscience.com/developers/docs/curl/events-api/reserved-events/verification
     */
    verification(data = {}, options = {}) {
      const event = '$verification';

      _.extend(data, {
        $type: event
      });

      return this.create(data, options);
    }
  };
}

module.exports = getEventsApi;
