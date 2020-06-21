'use strict';   // to enforce secure coding practices

const userSchema = require('../../schemas/user');
const validator = require('../middlewares/validator');
const { update } = require('../actions/user');

// export a function to add/register routes for the app
module.exports = function (app) {
    app.patch('/users/:id', validator(userSchema), update);
};