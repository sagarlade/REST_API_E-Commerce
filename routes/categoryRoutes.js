const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get a single category by ID
router.get('/:id', categoryController.getCategory);

// Create a new category
router.post('/', categoryController.createCategory);

// Update a category by ID
router.put('/:id', categoryController.updateCategory);

// Delete a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;