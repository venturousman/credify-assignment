# Credify coding assignment
Credify

**Prerequisites**
- Download & install [MongoDB](https://www.mongodb.com/try/download/community) on the local machine
- Download & install [NodeJS](https://nodejs.org/en/download/). I'm using NodeJS version v10.16.0.

**Folder structure**
- docs: contains the documentation.
- src:
    - api:
        - actions: contains action methods of specific functions.
        - controllers: haven't used yet. It's intended to use for DI implementation with inversify module.
        - middlewares: contains the application's middlewares.
        - routes: contains the routing files.
    - config: contains configuration files such as database configuration, twilio configuration, etc..
    - loaders: haven't used yet.
    - models: contains the database models.
    - schemas: contains schemas for data validation.
    - services: contains business services
- tests: contains testing implementation.

**Middleware modules**
- "@hapi/joi": "^17.1.1": The most powerful schema description language and data validator for JavaScript.
- "body-parser": "^1.19.0": Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
- "countries-list": "^2.5.4": Countries, Languages & Continents data. To lookup the postal code of the respective country.
- "express": "^4.17.1": The fast, unopinionated, minimalist web framework for Node.
- "inversify": "^5.0.1": A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.
- "inversify-express-utils": "^6.3.2": Some utilities for the development of express applications with Inversify.
- "mongoose": "^5.9.19": Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. It is built on top of the MongoDB driver to provide programmers with a way to model their data.
- "reflect-metadata": "^0.1.13": one of dependencies of the inversify-express-utils and inversify modules.
- "swagger-ui-express": "^4.1.4": This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json file. The result is living documentation for your API hosted from your API server via a route.
- "twilio": "^3.46.0": The 3rd party verification service. It supports send & verify the OTP code via SMS or Call. It's the fastest approach. Actually we can implement our own verification system/feature. But we need to do many things such as:
    - Database tables: to keep/support the verification code for verifying later.
    - We have to use the 3rd party SMS/Call service for sending SMS or call.
    - Implement functions: to send and verify the verification code (includes querying from the database).
    - ...etc.
    - Thanks for Twillio, we can have an all-in-one service.

**All the required steps in order to get the applications run on local computer**
```
npm install
npm start
```

**CURL commands to verify the APIs**
- Document
```
http://localhost:3000/api-docs
```
- Send the verification code
```
curl --location --request POST 'localhost:3000/send' \
--header 'Content-Type: application/json' \
--data-raw '{
	"country": "VN",
	"phone": "0973977374"
}'
```
- Verify the verification code
```
curl --location --request POST 'localhost:3000/verify' \
--header 'Content-Type: application/json' \
--data-raw '{
	"phone": "+84973977374",
	"verificationCode": "887032"
}'
```
- Update user's account information
```
curl --location --request PATCH 'localhost:3000/users/5eee370474acd1459077b901' \
--header 'Content-Type: application/json' \
--data-raw '{
    "address": "QL1A",
    "email": "tin@gmail.com",
    "phone": "+84973977374"
}'
```

**Development Requirement**
I have completed the following requirements:
1. The main flows:
    1.1 Phone number input
    1.2 Phone number verification
    1.3 Account information input
2. The designed APIs:
    - /send: Phone number input. I thought about the /resend API. It can use the same /send API.
    - /verify: Phone number verification.
    - /users/{id}: Account information input. To update the account information.
3. The database: MongoDB
4. Programming languare: Node.js