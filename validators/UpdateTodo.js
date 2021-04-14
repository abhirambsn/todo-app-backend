const Joi = require('@hapi/joi')

const schema = Joi.object().keys({
    title: Joi.string().min(6),
    content: Joi.string().min(6).max(400)
})

module.exports = schema