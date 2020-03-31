# node-siftscience

Node client for Sift Science API

[![Build Status](https://travis-ci.org/officert/node-siftscience.svg?branch=master)](https://travis-ci.org/officert/node-siftscience)

[![Coverage Status](https://coveralls.io/repos/github/officert/node-siftscience/badge.svg?branch=master)](https://coveralls.io/github/officert/node-siftscience?branch=master)

Node JS, Promise Based HTTP Client for Sift Science's API.

## Installation

```shell
npm install node-siftscience --save
```

## Quick Start

Create a Sift Science HTTP Client using your API Key:

```javascript
//get the Sift Science factory
const SiftScienceClient = require('node-siftscience');

//create an instance of the Sift Science client
const client = new SiftScienceClient('your API Key');

//now you can use the client to make requests to Sift Science's API
client.events.create({
  $type: 'your custom event'
});
```

## Table of Contents

-   [Debug Mode](<#debug mode>)

-   [Events](#events)

-   [Labels](#labels)
-   [Score](#score)
-   [Decisions](#decisions)

## Debug mode

When creating your Sift Science Client instance you can put it in debug mode to log any errors

```javascript
const client = new SiftScienceClient('your API Key',{
  debugMode: true
});
```

## Events

### [Custom Events](https://siftscience.com/developers/docs/curl/events-api/custom-events)

```javascript
client.events.create({
  $type: 'your custom event',
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

The library also supports shortcuts for Sift Science's [Reserved Events](https://siftscience.com/developers/docs/curl/events-api/reserved-events):

### [Create Order](https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-order)

```javascript
client.events.createOrder({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Update Order](https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-order)

```javascript
client.events.updateOrder({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Transaction](https://siftscience.com/developers/docs/curl/events-api/reserved-events/transaction)

```javascript
client.events.transaction({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Create Account](https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-account)

```javascript
client.events.createAccount({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Update Account](https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-account)

```javascript
client.events.updateAccount({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Update Password](https://sift.com/developers/docs/curl/events-api/reserved-events/update-password)

```javascript
client.events.updatePassword({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Create Content](https://siftscience.com/developers/docs/curl/events-api/reserved-events/create-content)

```javascript
client.events.createContent({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Update Content](https://siftscience.com/developers/docs/curl/events-api/reserved-events/update-content)

```javascript
client.events.updateContent({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Content Status](https://siftscience.com/developers/docs/curl/events-api/reserved-events/content-status)

```javascript
client.events.contentStatus({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Flag Content](https://siftscience.com/developers/docs/curl/events-api/reserved-events/flag-content)

```javascript
client.events.flagContent({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Add Promotion](https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-promotion)

```javascript
client.events.addPromotion({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Add Item To Cart](https://siftscience.com/developers/docs/curl/events-api/reserved-events/add-item-to-cart)

```javascript
client.events.addItemToCart({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Remove Item From Cart](https://siftscience.com/developers/docs/curl/events-api/reserved-events/remove-item-from-cart)

```javascript
client.events.removeItemFromCart({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Submit Review](https://siftscience.com/developers/docs/curl/events-api/reserved-events/submit-review)

```javascript
client.events.submitReview({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Send Message](https://siftscience.com/developers/docs/curl/events-api/reserved-events/send-message)

```javascript
client.events.sendMessage({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Login](https://siftscience.com/developers/docs/curl/events-api/reserved-events/login)

```javascript
client.events.login({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Logout](https://siftscience.com/developers/docs/curl/events-api/reserved-events/logout)

```javascript
client.events.logout({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Link Session To User](https://siftscience.com/developers/docs/curl/events-api/reserved-events/link-session-to-user)

```javascript
client.events.linkSessionToUser({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Chargeback](https://siftscience.com/developers/docs/curl/events-api/reserved-events/chargeback)

```javascript
client.events.chargeback({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Order Status](https://siftscience.com/developers/docs/curl/events-api/reserved-events/order-status)

```javascript
client.events.orderStatus({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

### [Verification](https://siftscience.com/developers/docs/curl/events-api/reserved-events/verification)

```javascript
client.events.verification({
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
});
```

## Labels

### [Label User](https://siftscience.com/developers/docs/curl/labels-api/label-user)

```javascript
client.labels.createByUserId('userId', {
  $type: 'your custom event',
  $is_bad : true,
  $abuse_types: 'payment_abuse,promotion_abuse'
});
```

### [Unlabel User](https://siftscience.com/developers/docs/curl/labels-api/unlabel-user)

```javascript
client.labels.deleteByUserId('userId', {
  $abuse_types: 'payment_abuse,promotion_abuse'
});
```

## Score

### [User Score](https://siftscience.com/developers/docs/curl/score-api/score-api)

```javascript
client.score.getByUserId('userId', {
  $abuse_types: 'payment_abuse,promotion_abuse'
});
```

You can also ask the API to return a user's score when creating [events](#events).

```javascript
client.events.create({
  $type: 'your custom event',
  $user_id : '123',
  $session_id: 'gigtleqddo84l8cm15qe4il'
}, { //2nd argument are query string params
  $return_score: true,
  $abuse_types: 'payment_abuse,promotion_abuse'
});
```

## Decisions

### [Apply Decisions](https://siftscience.com/developers/docs/curl/decisions-api/apply-decisions)

```javascript
client.decisions.applyByAccountIdAndUserId('accountId', 'userId', {
  decision_id : 'user_looks_ok_payment_abuse'
});
```

### [User Decisions](https://siftscience.com/developers/docs/curl/decisions-api/decision-status)

```javascript
client.decisions.getByAccountIdAndUserId('accountId', 'userId');
```

### [Order Decisions](https://siftscience.com/developers/docs/curl/decisions-api/decision-status)

```javascript
client.decisions.getByAccountIdAndOrderId('accountId', 'orderId');
```

### [Decisions List](https://siftscience.com/developers/docs/curl/decisions-api/decisions-list)

```javascript
client.decisions.listByAccountId('accountId');
```
