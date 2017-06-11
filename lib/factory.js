const SiftScienceClient = require('./client');

module.exports = {
  init(key) {
    if (!key) throw new Error('key is required');

    return new SiftScienceClient(key);
  }
};
