const Cart = require('../models/cart.model');

// Add item to cart
const addItemToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // If cart exists for the user, update it
            const itemIndex = cart.items.findIndex(p => p.productId == productId);

            if (itemIndex > -1) {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            } else {
                cart.items.push({ productId, quantity });
            }
            cart = await cart.save();
            return res.status(201).send(cart);
        } else {
            // If no cart exists, create a new one
            const newCart = await Cart.create({
                userId,
                items: [{ productId, quantity }]
            });
            return res.status(201).send(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

// Get cart by user ID
const getCartByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).send("Cart not found");
        }

        res.status(200).send(cart);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        let cart = await Cart.findOne({ userId });

        if (cart) {
            cart.items = cart.items.filter(item => item.productId != productId);
            cart = await cart.save();
            return res.status(200).send(cart);
        } else {
            return res.status(404).send("Cart not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

// Clear cart
const clearCart = async (req, res) => {
    try {
        const { userId } = req.body;
        let cart = await Cart.findOne({ userId });

        if (cart) {
            cart.items = [];
            cart = await cart.save();
            return res.status(200).send(cart);
        } else {
            return res.status(404).send("Cart not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

// Update item quantity in cart
const updateCartItem = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        let cart = await Cart.findOne({ userId });

        if (cart) {
            const itemIndex = cart.items.findIndex(p => p.productId == productId);

            if (itemIndex > -1) {
                let productItem = cart.items[itemIndex];
                productItem.quantity = quantity;
                cart.items[itemIndex] = productItem;
                cart = await cart.save();
                return res.status(200).send(cart);
            } else {
                return res.status(404).send("Product not found in cart");
            }
        } else {
            return res.status(404).send("Cart not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

// Get all items in cart
const getCartItems = async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).send("Cart not found");
        }

        res.status(200).send(cart.items);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
};

module.exports = { addItemToCart, getCartByUserId, removeItemFromCart, clearCart, updateCartItem, getCartItems };