const mongoose = require('mongoose');
const Category = require('./Category.model');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;