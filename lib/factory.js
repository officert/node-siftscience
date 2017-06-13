const SiftScienceClient = require('./client');

module.exports = {
  init(key, options) {
    if (!key) throw new Error('key is required');

    return new SiftScienceClient(key, options);
  }
};
