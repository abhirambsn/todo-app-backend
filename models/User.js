const mongoose = require('mongoose')
const { v4: uuid4 } = require('uuid')

const userSchema = mongoose.Schema({
    _id: {
        type: String,
        default: function getUUID() { return uuid4() },
    },
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255, 
        min: 10
    },
    password: {
        type: String,
        required: true,
        max: 4096,
        min: 8
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)