// controllers/userController.js

const express = require('express');
const router = express.Router(); // Create a new router in the controller

// Import the user controller
const userController = require('../controllers/userController');

// Define your routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router; // Export the router
