const Order = require('../models/Order.model');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                order: newOrder
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({
            status: 'success',
            results: orders.length,
            data: {
                orders
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a single order by ID
const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                status: 'fail',
                message: 'No order found with that ID'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                order
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Update an order by ID
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
            runValidators: true
        });
        if (!order) {
            return res.status(404).json({
                status: 'fail',
                message: 'No order found with that ID'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                order
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete an order by ID
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params._id);
        if (!order) {
            return res.status(404).json({
                status: 'fail',
                message: 'No order found with that ID'
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
module.exports = { createOrder, getAllOrders, getOrder, updateOrder, deleteOrder };