const Product = require('../models/Product.model');

const productService = {
    createProduct: async (productData) => {
        try {
            const product = new Product(productData);
            await product.save();
            return product;
        } catch (error) {
            throw new Error('Error creating product: ' + error.message);
        }
    },

    getProductById: async (productId) => {
        try {
            const product = await Product.findById(productId);
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw new Error('Error fetching product: ' + error.message);
        }
    },

    updateProduct: async (productId, updateData) => {
        try {
            const product = await Product.findByIdAndUpdate(productId, updateData, { new: true });
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw new Error('Error updating product: ' + error.message);
        }
    },

    deleteProduct: async (productId) => {
        try {
            const product = await Product.findByIdAndDelete(productId);
            if (!product) {
                throw new Error('Product not found');
            }
            return product;
        } catch (error) {
            throw new Error('Error deleting product: ' + error.message);
        }
    },

    getAllProducts: async () => {
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            throw new Error('Error fetching products: ' + error.message);
        }
    }
};

module.exports = productService;