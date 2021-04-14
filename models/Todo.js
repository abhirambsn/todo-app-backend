const mongoose = require('mongoose')
const { v4: uuid4 } = require('uuid')

const todoSchema = mongoose.Schema({
    _id: {
        type: String,
        default: function getUUID() { return uuid4() }
    },
    title: {
        type: String,
        required: true,
        min: 6
    },
    content: {
        type: String,
        required: true,
        min: 5,
        max: 400
    },
    user: {
        type: String,
        ref: "User"
    },
    dueDate: {
        type: Date,
        default: Date.now(),
        required: true,
    }, 
    isCompleted: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Todo", todoSchema)