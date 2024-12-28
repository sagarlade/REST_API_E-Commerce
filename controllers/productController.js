const Product = require("../models/Product.model");
const mongoose = require("mongoose");

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Get a single product
const getProduct = async (req, res) => {
    try {
      const id = req.params._id;
  
      // Validate the ID format first
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
          .status(400)
          .json({ status: "fail", message: "Invalid Product ID" });
      }
  
      // Fetch the product by ID
      const product = await Product.findById(id);
      console.log(product);
  
      if (!product) {
        return res
          .status(404)
          .json({ status: "fail", message: "Product not found" });
      }
  
      res.status(200).json({
        status: "success",
        data: product,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({
        status: "fail",
        message: "Server Error",
      });
    }
  };

// Create a new product
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params._id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
