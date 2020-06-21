'use strict';   // to enforce secure coding practices

const verificationRoutes = require('./verification');
const userRoutes = require('./user');

// export a function to add/register routes for the app
module.exports = function (app) {
    verificationRoutes(app);
    userRoutes(app);
};