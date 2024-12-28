const mongoose = require("mongoose");
const Review = require("../models/Review.model");

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.status(200).json({
      status: "success",
      results: reviews.length,
      data: {
        reviews,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params._id);
    if (!review) {
      return res.status(404).json({
        status: "fail",
        message: "No review found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        review,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const createReview = async (req, res) => {
  try {
    const newReview = await Review.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        review: newReview,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// const updateReview = async (req, res) => {
//   try {
//     const review = await Review.findByIdAndUpdate(req.params._id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!review) {
//       return res.status(404).json({
//         status: "fail",
//         message: "No review found with that ID",
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       data: {
//         review,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "error",
//       message: err.message,
//     });
//   }
// };
const updateReview = async (req, res) => {
  try {
    const { id } = req.params; // Destructure the id from the request parameters

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid review ID",
      });
    }

    // Find and update the review
    const review = await Review.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Enforce schema validators on the update
    });

    // Check if review was found and updated
    if (!review) {
      return res.status(404).json({
        status: "fail",
        message: "No review found with that ID",
      });
    }

    // Respond with the updated review
    res.status(200).json({
      status: "success",
      data: {
        review,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params._id);

    if (!review) {
      return res.status(404).json({
        status: "fail",
        message: "No review found with that ID",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
