const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

// Add item to cart
router.post('/add', cartController.addItemToCart);

// Get all items in cart
router.get('/', cartController.getCartItems);

// Update item quantity in cart
router.put('/update/:itemId', cartController.updateCartItem);

// Remove item from cart
router.delete('/remove/:itemId', cartController.removeItemFromCart);

module.exports = router;
// Clear cart
router.post('/clear', cartController.clearCart);