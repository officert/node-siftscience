class SiftScienceClient {
  constructor(key) {
    if (!key) throw new Error('key is required');

    this._key = key;
  }
}

module.exports = SiftScienceClient;