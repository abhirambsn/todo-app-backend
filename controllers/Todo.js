const todoModel = require('../models/Todo')
const todoValidator = require('../validators/NewTodo')
const todoUpdateValidator = require('../validators/UpdateTodo')

const addTodo = (req, res) => {
    // Validate Todo
    const { error } = todoValidator.validate(req.body)
    if (error) return res.status(400).send({ error: error.details[0].message })

    const todo = new todoModel({
        title: req.body.title,
        content: req.body.content,
        user: req.user,
    })

    try {
        todo.save()
        return res.status(200).send(todo.toJSON())
    } catch (error) {
        return res.status(400).send({ error: error })
    }

}

const modifyTodo = async (req, res) => {
    const todoID = req.params.todo_id
    const { error } = todoUpdateValidator.validate(req.body)
    if (error) return res.status(400).send({ error: error.details[0].message })

    const data = req.body
    data['user'] = req.user

    // Search for todo and Update it
    try {
        const todo = await todoModel.findOneAndUpdate({_id: todoID, user: req.user._id}, req.body).exec()
        if (!todo) return res.status(404).send({ error: "Todo not found" })
        res.status(200).send({ status: "Updated", todo: todo })
    } catch (error) {
        return res.status(400).send({ error: error })
    }
}

const deleteTodo = async (req, res) => {
    const todoID = req.params.todo_id

    // Search if the todo exists and delete it
    const todo = await todoModel.findOneAndDelete({_id: todoID, user: req.user._id}).exec()
    if (!todo) return res.status(400).send({ error: "Todo not found" })

    return res.status(200).send({ message: "Deleted" })
}

const getTodo = async (req, res) => {
    const todoID = req.params.todo_id

    const todo = await todoModel.findOne({ _id: todoID, user: req.user }).exec()
    if (!todo) return res.status(404).send({ error: "Todo Not Found" })

    return res.status(200).send(todo.toJSON())
}

const getAllTodos = async (req, res) => {
    const todos = await todoModel.find({ user: req.user }).exec()
    return res.status(200).send(todos)
}

const markComplete = async (req, res) => {
    const todoID = req.params.todo_id
    const todo = await todoModel.findByIdAndUpdate({ _id: todoID, user: req.user }, { isCompleted: true }).exec()
    if (!todo) return res.status(404).send({ error: "Todo Not Found" })

    return res.status(200).send({ status: "Marked as Complete", todo: todo })
}

module.exports = {
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    modifyTodo: modifyTodo,
    getTodo: getTodo,
    getTodos: getAllTodos,
    markComplete: markComplete
}