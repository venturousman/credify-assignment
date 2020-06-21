'use strict';   // to enforce secure coding practices

const verificationSchema = require('../../schemas/verification');
const validator = require('../middlewares/validator');
const { sendCode, verifyCode } = require('../actions/verification');

// export a function to add/register routes for the app
module.exports = function (app) {
    app.post('/send', validator(verificationSchema), sendCode);
    app.post('/verify', validator(verificationSchema), verifyCode);
};