# node-siftscience
Node client for Sift Science API

[![Build Status](https://travis-ci.org/officert/node-siftscience.svg?branch=master)](https://travis-ci.org/officert/node-siftscience)

[![Coverage Status](https://coveralls.io/repos/github/officert/node-siftscience/badge.svg?branch=master)](https://coveralls.io/github/officert/node-siftscience?branch=master)

Node JS, Promise Based HTTP Client for Sift Science's API.

### Installation

``` shell
npm install node-siftscience --save
```

### Quick Start

Create a Sift Science HTTP Client using your API Key:

``` js
//get the Sift Science factory
const siftScience = require('node-siftscience');

//create an instance of the Sift Science client
const client = siftScience.init('your API Key');

//now you can use the client to make requests to Sift Science's API
client.events.create({
  $type: 'your custom event'
});
```
