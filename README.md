
# ⚠ This repo is no longer mantained, please use https://github.com/obrut/fortnox


---

[![CircleCI](https://circleci.com/gh/ricardodantas/fortnox.js/tree/master.svg?style=svg)](https://circleci.com/gh/ricardodantas/fortnox.js/tree/master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d4ddc47dc83edf484816/test_coverage)](https://codeclimate.com/github/ricardodantas/fortnox.js/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/d4ddc47dc83edf484816/maintainability)](https://codeclimate.com/github/ricardodantas/fortnox.js/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/ricardodantas/fortnox.js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ricardodantas/fortnox.js?targetFile=package.json)


# Fortnox AB API Client for Javascript
Unofficial Javascript client wrapper for [Fortnox AB API](https://developer.fortnox.se/documentation/).

***
    Status: WORK IN PROGRESS
***

## How to use

### Authorization (request the Access Token)

*Remember to just use once, otherwise you will get your credentials invalid.*

```
fortnoxAbApiJsClient
  .authorization(authorizationCode, clientSecret)
  .then(result => console.log(result.data.Authorization.AccessToken))
  .catch(error => console.log(error.response.data.ErrorInformation));
```

### Invoice listing

```
// Promise
fortnoxAbApiJsClient.invoices
  .list({
    accessToken: 'Abcde...',
    clientSecret: 'Fghij...'
  })
  .then(result => console.log(result.data))
  .catch(error => console.log(error.response));

// Async/Await
const resultInvoices = await fortnoxAbApiJsClient.invoices.list({
  accessToken: 'Abcde...',
  clientSecret: 'Fghij...'
});
```


## Resources & Actions available at the moment:

**IMPORTANT:** All the inputs/parameters should be used according to the official documentation (case sensitive).

* Invoices
  * create
  * update
  * cancel
  * list
  * email
  * get

* Customers
  * create
  * update
  * list
  * get


## Contribute

Feel free to fork this project and contribute.

## MIT license

Copyright © 2019 Ricardo Dantas Goncalves

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

