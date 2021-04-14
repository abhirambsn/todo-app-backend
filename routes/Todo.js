const express = require('express')
const router = express.Router()

const { addTodo, modifyTodo, deleteTodo, getTodo, getTodos, markComplete } = require('../controllers/Todo')
const verifyJWT = require('../middleware/Authentication')

router.get('/', verifyJWT, getTodos)
router.get('/:todo_id', verifyJWT, getTodo)
router.post('/', verifyJWT, addTodo)
router.put('/:todo_id', verifyJWT, modifyTodo)
router.delete('/:todo_id', verifyJWT, deleteTodo)
router.put('/:todo_id/complete', markComplete)

module.exports = router