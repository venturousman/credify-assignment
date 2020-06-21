require('reflect-metadata');
const { Container, decorate, injectable, inject } = require('inversify');
const { controller, httpPost } = require('inversify-express-utils');
const VerificationService = require('../services/verification');
const UserService = require('../services/user');
const VerificationController = require('../api/controllers/verification');

// Declare as injectable and its dependencies
decorate(injectable(), VerificationService);
decorate(injectable(), UserService);
// decorate(injectable(), VerificationController);
decorate(controller(''), VerificationController);
// decorate(httpPost('/send'), (req, res) => { console.log('HELLO!') });
decorate(inject('VerificationService'), VerificationController, 0);
decorate(inject('UserService'), VerificationController, 1);

// set up container
const container = new Container();

// set up bindings
container.bind('VerificationService').to(VerificationService);
container.bind('UserService').to(UserService);

module.exports = container;