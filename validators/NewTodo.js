const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
    title: Joi.string().min(6).required(),
    content: Joi.string().min(6).max(400).required()
})

module.exports = schema