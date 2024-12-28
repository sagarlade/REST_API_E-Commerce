const Payment = require('../models/Payment.model'); // Assuming you have a Payment model
const User = require('../models/user.model'); // Assuming you have a User model



// Create a new payment
const createPayment = async (req, res) => {
    try {
        const { userId, amount, paymentMethod } = req.body;

        // Validate user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create payment
        const payment = new Payment({
            user: userId,
            amount,
            paymentMethod,
            status: 'Pending'
        });

        await payment.save();

        res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get payment by ID
const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params._id);

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update payment status
const updatePaymentStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const payment = await Payment.findById(req.params._id);

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        payment.status = status;
        await payment.save();

        res.status(200).json({ message: 'Payment status updated successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete payment
const deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params._id);

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        await payment.remove();

        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
// Process payment
const processPayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params._id);

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        // Simulate payment processing logic
        payment.status = 'Completed';
        await payment.save();

        res.status(200).json({ message: 'Payment processed successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get payment status
const getPaymentStatus = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params._id);

        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json({ status: payment.status });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { createPayment, getPaymentById, updatePaymentStatus, deletePayment, processPayment, getPaymentStatus };