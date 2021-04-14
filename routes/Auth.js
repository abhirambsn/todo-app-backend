const express = require('express')
const router = express.Router()
const { login, register, getProfile, changePassword } = require('../controllers/Auth')
const verifyJWT = require('../middleware/Authentication')

// Routes
router.post('/login', login)
router.post('/register', register)
router.get('/profile', verifyJWT, getProfile)
router.put('/changePassword', verifyJWT, changePassword)

module.exports = router