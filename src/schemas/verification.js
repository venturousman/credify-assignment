const Joi = require('@hapi/joi');

// define the validation schema
const schema = Joi.object({
    phone: Joi.string().regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).required(),
    country: Joi.string(),
    verificationCode: Joi.string()
});

module.exports = schema;