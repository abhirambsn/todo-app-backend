const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
    currentPassword: Joi.string().min(6).required(),
    password1: Joi.string().min(6).required()
})

module.exports = schema