const getEventsApi = require('./events');
const getLabelsApi = require('./labels');
const getScoreApi = require('./score');

const Logger = require('../logger');

class SiftScienceClient {
  constructor(key, options = {}) {
    if (!key) throw new Error('key is required');

    this._key = key;

    this._logger = new Logger({
      debugMode: options.debugMode
    });

    this.events = getEventsApi(this);
    this.labels = getLabelsApi(this);
    this.score = getScoreApi(this);
  }
}

module.exports = SiftScienceClient;
