const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
    email: Joi.string().min(10).required().email(),
    password: Joi.string().min(6).required()
})

module.exports = schema