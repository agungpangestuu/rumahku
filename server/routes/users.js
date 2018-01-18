const express = require('express')
const router = express.Router()
const User = require('../controllers/userController')

router.post('/', User.createUser)
router.get('/', User.findAllUsers)
router.put('/:id', User.updateUser)
router.delete('/:id', User.destroyUser)
router.post('/login', User.loginUsers)

module.exports = router;
