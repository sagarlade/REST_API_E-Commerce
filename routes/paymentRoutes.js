const express = require('express');
const { processPayment, getPaymentStatus, anotherController, yetAnotherController } = require('../controllers/paymentController');

const router = express.Router();

// Route to process a payment
router.post('/process', processPayment);

// Route to get payment status
router.get('/status/:paymentId', getPaymentStatus);



module.exports = router;