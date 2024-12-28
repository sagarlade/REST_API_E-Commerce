const Order = require('../models/Order.model');

class OrderService {
    async createOrder(orderData) {
        try {
            const order = new Order(orderData);
            await order.save();
            return order;
        } catch (error) {
            throw new Error('Error creating order: ' + error.message);
        }
    }

    async getOrderById(orderId) {
        try {
            const order = await Order.findById(orderId);
            if (!order) {
                throw new Error('Order not found');
            }
            return order;
        } catch (error) {
            throw new Error('Error fetching order: ' + error.message);
        }
    }

    async updateOrder(orderId, updateData) {
        try {
            const order = await Order.findByIdAndUpdate(orderId, updateData, { new: true });
            if (!order) {
                throw new Error('Order not found');
            }
            return order;
        } catch (error) {
            throw new Error('Error updating order: ' + error.message);
        }
    }

    async deleteOrder(orderId) {
        try {
            const order = await Order.findByIdAndDelete(orderId);
            if (!order) {
                throw new Error('Order not found');
            }
            return order;
        } catch (error) {
            throw new Error('Error deleting order: ' + error.message);
        }
    }
}

module.exports = new OrderService();