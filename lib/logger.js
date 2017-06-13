class Logger {
  /**
   * @param {Object} [options]
   * @param {Boolean} [options.debugMode]
   */
  constructor(options = {}) {
    this._debugMode = options.debugMode || false;
  }

  log(...args) {
    if (!this._debugMode) return;

    console.log(...args);
  }

  logRequestError(error) {
    if (!this._debugMode || !error) return;

    console.log('SIFT SCIENCE ERROR RESPONSE');

    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

    console.log(error.config);
  }
}

module.exports = Logger;
