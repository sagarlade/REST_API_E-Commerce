class PaymentService {
    constructor(paymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    async processPayment(orderId, amount, paymentDetails) {
        try {
            const paymentResult = await this.paymentGateway.charge(amount, paymentDetails);
            if (paymentResult.success) {
                // Handle successful payment
                console.log(`Payment for order ${orderId} was successful.`);
                return { success: true, message: 'Payment processed successfully.' };
            } else {
                // Handle failed payment
                console.log(`Payment for order ${orderId} failed.`);
                return { success: false, message: 'Payment failed.' };
            }
        } catch (error) {
            // Handle error during payment processing
            console.error(`Error processing payment for order ${orderId}:`, error);
            return { success: false, message: 'Error processing payment.' };
        }
    }
}

module.exports = PaymentService;