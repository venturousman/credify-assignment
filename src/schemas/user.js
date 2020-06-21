const Joi = require('@hapi/joi');

// define the validation schema
const schema = Joi.object({

    firstName: Joi.string(),
    lastName: Joi.string(),

    // email is required
    // email must be a valid email string
    email: Joi.string().email().required(),

    // phone is required
    phone: Joi.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/),

    country: Joi.string(),
    province: Joi.string(),
    city: Joi.string(),
    address: Joi.string(),
    postalCode: Joi.string()

});

module.exports = schema;