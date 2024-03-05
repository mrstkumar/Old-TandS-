const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
// Add other authentication routes as needed

module.exports = router;
