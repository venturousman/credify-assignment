'use strict';   // to enforce secure coding practices

const userSchema = require('../../schemas/user');
const validator = require('../middlewares/validator');
const { update } = require('../actions/user');

// export a function to add/register routes for the app
module.exports = function (app) {
    // app.get('/users', getMany);
    // app.get('/users/:id', getOne);
    // app.post('/users', validator(userSchema), create);
    app.patch('/users/:id', validator(userSchema), update);
    // app.delete('/users/:id', delete);
};