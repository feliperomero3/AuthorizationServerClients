# Simple JavaScript application

Plain JavaScript application that sign users in using the OpenID Connect Core 1.0 Implicit Flow.

> When using the Implicit Flow, all tokens are returned from the Authorization Endpoint; the Token Endpoint is not used.

## Prerequisites

1. Node 14+

## Getting started

1. Clone this repository.
1. Change to this directory.
1. Generate a certificate (`server.crt`) with private key (`server.key`) ([How-to][2])
1. Run `npm install`.
1. Run `npm start`.
1. Open your web browser at `http://localhost:4000/index.html`.

## Captures

![javascript-app](../../assets/js-app.png)

[2]: https://gist.github.com/feliperomero3/a6282b0e7ca579fff0e296227675190d
