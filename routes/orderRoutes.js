const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

// Create a new order
router.post('/', orderController.createOrder);

// Get all orders
router.get('/', orderController.getAllOrders);

// Get a specific order by ID
router.get('/:orderId', orderController.getOrder);

// Update an order by ID
router.put('/:orderId', orderController.updateOrder);

// Delete an order by ID
router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;