const Category = require('../models/Category.model');

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            status: 'success',
            results: categories.length,
            data: {
                categories
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a single category by ID
const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params._id);
        if (!category) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                category
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new category
const createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                category: newCategory
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Update an existing category
const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
            runValidators: true
        });
        if (!category) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                category
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete a category
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params._id);
        if (!category) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

module.exports = { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory };