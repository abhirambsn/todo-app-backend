const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(10).required().email(),
    password: Joi.string().min(6).required()
})

module.exports = schema