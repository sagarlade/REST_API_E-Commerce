const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a single user by ID
router.get('/:id', userController.getUser);

// Route to create a new user
router.post('/', userController.createUser);

// Route to update a user by ID
router.put('/:id', userController.updateUser);

// Route to delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;